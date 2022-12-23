package com.newyearletter.newyearletter.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private String userId;
    private String password;
    private String nickName;
    private String url;
}
