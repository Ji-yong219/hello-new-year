package com.newyearletter.newyearletter.service;

import com.newyearletter.newyearletter.domain.dto.letter.LetterAddRequest;
import com.newyearletter.newyearletter.domain.dto.letter.LetterAddResponse;
import com.newyearletter.newyearletter.domain.dto.letter.LetterGetResponse;
import com.newyearletter.newyearletter.domain.dto.letter.LetterPageResponse;
import com.newyearletter.newyearletter.domain.entity.Letter;
import com.newyearletter.newyearletter.domain.entity.User;
import com.newyearletter.newyearletter.exception.AppException;
import com.newyearletter.newyearletter.exception.ErrorCode;
import com.newyearletter.newyearletter.repository.LetterRepository;
import com.newyearletter.newyearletter.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class LetterService {
    private final UserRepository userRepository;
    private final LetterRepository letterRepository;
    public LetterPageResponse findUuid(String uuid) {
        //uuid가 올바른 주소인지 확인
        User user = userRepository.findByUuid(uuid)
                .orElseThrow(() -> new AppException(ErrorCode.URL_NOT_FOUND, "해당 URL을 찾을 수 없습니다."));

        return new LetterPageResponse(user.getNickName(), user.getWish());
    }

    public LetterAddResponse saveLetter(String uuid, LetterAddRequest request) {
        //uuid가 올바른 주소인지 확인
        User user = userRepository.findByUuid(uuid)
                .orElseThrow(() -> new AppException(ErrorCode.URL_NOT_FOUND, "해당 URL을 찾을 수 없습니다."));
        //letter 작성
        Letter letter = Letter.toEntity(request, user);
        user.updateLetter(letter, request.getMoney());

        //letter 저장
        letterRepository.save(letter);
        userRepository.save(user);
        return new LetterAddResponse("편지 전송 완료");
    }

    public PageImpl<LetterGetResponse> getAllLetter(Pageable pageable, String uuid, String userName) {
        //uuid가 올바른 주소인지 확인
        User user = userRepository.findByUuid(uuid)
                .orElseThrow(() -> new AppException(ErrorCode.URL_NOT_FOUND, "해당 URL을 찾을 수 없습니다."));

        //권한 확인, uuid 주소와 접속자 일치 확인
        if(!user.getUserID().equals(userName)){
            throw new AppException(ErrorCode.INVALID_PERMISSION, ErrorCode.INVALID_TOKEN.getMessage());
        }

        Page<Letter> letters = letterRepository.findAll(pageable);
        List<LetterGetResponse> letterGetResponseList = letters.stream()
                .map(letter -> LetterGetResponse.fromEntity(letter)).collect(Collectors.toList());

        return new PageImpl<>(letterGetResponseList, pageable, letters.getTotalElements());
    }
}
