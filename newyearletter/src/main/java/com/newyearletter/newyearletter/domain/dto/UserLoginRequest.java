package com.newyearletter.newyearletter.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserLoginRequest {
    private String userId;
    private String password;
}
