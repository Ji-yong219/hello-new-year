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
        userRepository.findByUserId(request.getUserId())
                .ifPresent(user -> {
                    throw new AppException(ErrorCode.DUPLICATED_USER_ID, request.getUserId()+"은 중복된 아이디입니다.");
                });


        //랜덤 URL Token 생성
        String url = "makeRandomToken";

        User savedUser = userRepository.save(request.toEntity(url, encoder.encode(request.getPassword())));

        return UserDto.builder()
                .userId(savedUser.getUserId())
                .password(savedUser.getPassword())
                .nickName(savedUser.getNickName())
                .url(savedUser.getUrl())
                .build();
    }

    public String login(String userName, String password) {
        //userName 확인
        User user = userRepository.findByUserId(userName)
                .orElseThrow(()-> new AppException(ErrorCode.USERNAME_NOT_FOUND, userName+"이 없습니다."));
        //password 확인
        if(!encoder.matches(password,user.getPassword())){
            throw new AppException(ErrorCode.INVALID_PASSWORD,"password가 일치하지 않습니다.");
        }
        return JwtTokenUtil.createToken(userName, key, expireTimeMs);
    }

    public User getUserByUserId(String userName) {
        return userRepository.findByUserId(userName)
                .orElseThrow(() -> new AppException(ErrorCode.USERNAME_NOT_FOUND,""));
    }
}
