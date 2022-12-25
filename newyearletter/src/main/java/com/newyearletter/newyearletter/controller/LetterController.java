package com.newyearletter.newyearletter.controller;

import com.newyearletter.newyearletter.domain.dto.LetterMyPageResponse;
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

    @GetMapping("/myPage/{url}")
    public Response<LetterMyPageResponse> mypage(@PathVariable String url, Authentication authentication){
        String userID = authentication.getName();
        LetterMyPageResponse mypageResponse = letterService.mypage(url, userID);
        return Response.success(mypageResponse);
    }
}
