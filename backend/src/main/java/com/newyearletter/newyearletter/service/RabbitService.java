package com.newyearletter.newyearletter.service;

import com.newyearletter.newyearletter.domain.dto.rabbit.RabbitCustomDto;
import com.newyearletter.newyearletter.domain.dto.rabbit.RabbitCustomResponse;
import com.newyearletter.newyearletter.domain.dto.rabbit.RabbitMyPageResponse;
import com.newyearletter.newyearletter.domain.dto.rabbit.RabbitResponse;
import com.newyearletter.newyearletter.domain.entity.User;
import com.newyearletter.newyearletter.exception.AppException;
import com.newyearletter.newyearletter.exception.ErrorCode;
import com.newyearletter.newyearletter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class RabbitService {
    private final UserRepository userRepository;

    /**
     * 마이페이지 조회
     */
    public RabbitMyPageResponse mypage(String uuid, String userId) {
        //url이 유무 확인
        User user = userRepository.findByUuid(uuid)
                .orElseThrow(() -> new AppException(ErrorCode.URL_NOT_FOUND, "해당 URL을 찾을 수 없습니다."));

        //로그인한 유저와 url사용자의 유저가 일치하는지 확인
        if(!user.getUserID().equals(userId)){
            throw new AppException(ErrorCode.INVALID_PERMISSION, "접속 권한이 없습니다.");
        }
        LocalDateTime currentDateTime = LocalDateTime.now();

        return new RabbitMyPageResponse(user.getNickName(), user.getMoney(), user.getCustom(), user.getWish(), currentDateTime);
    }

    /**
     * 친구 페이지 조회
     */
    public RabbitResponse friendPage(String uuid) {
        //url이 유무 확인
        User user = userRepository.findByUuid(uuid)
                .orElseThrow(() -> new AppException(ErrorCode.URL_NOT_FOUND, "해당 URL을 찾을 수 없습니다."));

        return new RabbitResponse(user.getNickName(), user.getWish(), user.getMoney(), user.getCustom());
    }

    /**
     * 커스텀 페이지 조회
     */
    public RabbitCustomDto getCustom(String uuid, String userID) {
        //url이 유무 확인
        User user = userRepository.findByUuid(uuid)
                .orElseThrow(() -> new AppException(ErrorCode.URL_NOT_FOUND, "해당 URL을 찾을 수 없습니다."));

        //로그인한 유저와 url사용자의 유저가 일치하는지 확인
        if(!user.getUserID().equals(userID)){
            throw new AppException(ErrorCode.INVALID_PERMISSION, "접속 권한이 없습니다.");
        }

        RabbitCustomDto dto = RabbitCustomDto.builder()
                .money(user.getMoney())
                .custom(user.getCustom())
                .wish(user.getWish())
                .build();
        return dto;
    }

    /**
     * 커스텀 페이지 저장
     */
    public RabbitCustomResponse saveCustom(String uuid, String userID, RabbitCustomDto request) {
        //url이 유무 확인
        User user = userRepository.findByUuid(uuid)
                .orElseThrow(() -> new AppException(ErrorCode.URL_NOT_FOUND, "해당 URL을 찾을 수 없습니다."));

        //로그인한 유저와 url사용자의 유저가 일치하는지 확인
        if(!user.getUserID().equals(userID)){
            throw new AppException(ErrorCode.INVALID_PERMISSION, "접속 권한이 없습니다.");
        }

        //커스텀 페이지 수정
        user.update(request.getWish(), request.getCustom());

        //커스텀 페이지 저장
        User savedUser = userRepository.save(user);

        RabbitCustomResponse customResponse = new RabbitCustomResponse("custom 등록 완료", savedUser.getNickName());
        return customResponse;
    }
}
