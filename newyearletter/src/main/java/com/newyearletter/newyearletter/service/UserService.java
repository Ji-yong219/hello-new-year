package com.newyearletter.newyearletter.service;

import com.newyearletter.newyearletter.domain.dto.UserDto;
import com.newyearletter.newyearletter.domain.dto.UserJoinRequest;
import com.newyearletter.newyearletter.domain.entity.User;
import com.newyearletter.newyearletter.exception.AppException;
import com.newyearletter.newyearletter.exception.ErrorCode;
import com.newyearletter.newyearletter.repository.UserRepository;
import com.newyearletter.newyearletter.utils.JwtTokenUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder encoder;
    @Value("${jwt.token.secret}")
    private String key;
    private long expireTimeMs = 1000 * 60 * 60 * 5;
    public UserDto join(UserJoinRequest request) {
        //중복 id 확인
        userRepository.findByUserID(request.getUserID())
                .ifPresent(user -> {
                    throw new AppException(ErrorCode.DUPLICATED_USER_ID, request.getUserID()+"은 중복된 아이디입니다.");
                });


        //랜덤 URL Token 생성
        String url = UUID.randomUUID().toString();

        User savedUser = userRepository.save(request.toEntity(url, encoder.encode(request.getPassword())));

        return UserDto.builder()
                .userID(savedUser.getUserID())
                .password(savedUser.getPassword())
                .nickName(savedUser.getNickName())
                .url(savedUser.getUrl())
                .build();
    }

    public String login(String userID, String password) {
        //userID 확인
        User user = userRepository.findByUserID(userID)
                .orElseThrow(()-> new AppException(ErrorCode.USER_ID_NOT_FOUND, userID+"이 없습니다."));
        //password 확인
        if(!encoder.matches(password,user.getPassword())){
            throw new AppException(ErrorCode.INVALID_PASSWORD,"password가 일치하지 않습니다.");
        }
        return JwtTokenUtil.createToken(userID, key, expireTimeMs);
    }

    public User getUserByUserID(String userID) {
        return userRepository.findByUserID(userID)
                .orElseThrow(() -> new AppException(ErrorCode.USER_ID_NOT_FOUND,""));
    }
}
