package com.newyearletter.newyearletter.controller;

import com.newyearletter.newyearletter.domain.dto.LetterMyPageResponse;
import com.newyearletter.newyearletter.domain.dto.LetterResponse;
import com.newyearletter.newyearletter.domain.dto.Response;
import com.newyearletter.newyearletter.domain.entity.User;
import com.newyearletter.newyearletter.service.LetterService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/letter")
@RequiredArgsConstructor
@Slf4j
public class LetterController {
    private final String sMailboxTitle = "우체통";
    private final LetterService letterService;
    
    @GetMapping("/getMailboxTitle")
    public String getMailboxTitle() {
        return this.sMailboxTitle;
    }

    @GetMapping("/mypage/{uuid}")
    public Response<LetterMyPageResponse> mypage(@PathVariable String uuid, Authentication authentication){
        String userID = authentication.getName();
        LetterMyPageResponse mypageResponse = letterService.mypage(uuid, userID);
        return Response.success(mypageResponse);
    }

    @GetMapping("/{uuid}")
    public Response<LetterResponse> letters(@PathVariable String uuid){
        LetterResponse letterResponse = letterService.letter(uuid);
        return Response.success(letterResponse);
    }
}
