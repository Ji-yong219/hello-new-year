package com.newyearletter.newyearletter.controller;

import com.newyearletter.newyearletter.domain.dto.*;
import com.newyearletter.newyearletter.domain.dto.user.*;
import com.newyearletter.newyearletter.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final UserService userService;
    /**
     * 로그인 페이지
     */
    @PostMapping("/join")
    public Response<UserJoinResponse> join(@RequestBody UserJoinRequest request){
        UserDto user = userService.join(request);
        return Response.success(new UserJoinResponse(user.getNickName(), user.getUuid()));
    }

    /**
     * 회원가입 페이지
     */
    @PostMapping("/login")
    public Response<UserLoginResponse> login(@RequestBody UserLoginRequest request){
        UserLoginResponse response = userService.login(request.getUserID(), request.getPassword());
        return Response.success(response);
    }
}
