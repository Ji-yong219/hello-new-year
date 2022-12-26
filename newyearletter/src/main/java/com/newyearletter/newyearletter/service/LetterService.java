package com.newyearletter.newyearletter.service;

import com.newyearletter.newyearletter.domain.dto.LetterMyPageResponse;
import com.newyearletter.newyearletter.domain.dto.LetterResponse;
import com.newyearletter.newyearletter.domain.entity.User;
import com.newyearletter.newyearletter.exception.AppException;
import com.newyearletter.newyearletter.exception.ErrorCode;
import com.newyearletter.newyearletter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LetterService {
    private final UserRepository userRepository;
    private final Integer money = 0;

    public LetterMyPageResponse mypage(String uuid, String userId) {
        //url이 유무 확인
        User user = userRepository.findByUuid(uuid)
                .orElseThrow(() -> new AppException(ErrorCode.URL_NOT_FOUND, "해당 URL을 찾을 수 없습니다."));

        //로그인한 유저와 url사용자의 유저가 일치하는지 확인
        if(!user.getUserID().equals(userId)){
            throw new AppException(ErrorCode.INVALID_PERMISSION, "접속 권한이 없습니다.");
        }

        return new LetterMyPageResponse(user.getNickName(), money);
    }

    public LetterResponse letter(String uuid) {
        //url이 유무 확인
        User user = userRepository.findByUuid(uuid)
                .orElseThrow(() -> new AppException(ErrorCode.URL_NOT_FOUND, "해당 URL을 찾을 수 없습니다."));

        return new LetterResponse(user.getNickName());
    }
}
