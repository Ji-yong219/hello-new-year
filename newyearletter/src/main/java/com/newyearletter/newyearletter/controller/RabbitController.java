package com.newyearletter.newyearletter.controller;

import com.newyearletter.newyearletter.domain.dto.RabbitMyPageResponse;
import com.newyearletter.newyearletter.domain.dto.RabbitResponse;
import com.newyearletter.newyearletter.domain.dto.Response;
import com.newyearletter.newyearletter.service.RabbitService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/rabbit")
@RequiredArgsConstructor
public class RabbitController {
    private final RabbitService rabbitService;

    @GetMapping("/mypage/{uuid}")
    public Response<RabbitMyPageResponse> mypage(@PathVariable String uuid, Authentication authentication){
        String userID = authentication.getName();
        RabbitMyPageResponse mypageResponse = rabbitService.mypage(uuid, userID);
        return Response.success(mypageResponse);
    }

    @GetMapping("/{uuid}")
    public Response<RabbitResponse> letters(@PathVariable String uuid){
        RabbitResponse rabbitResponse = rabbitService.letter(uuid);
        return Response.success(rabbitResponse);
    }
}
