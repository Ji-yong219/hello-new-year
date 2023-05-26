package com.newyearletter.newyearletter.domain.dto.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private String userID;
    private String password;
    private String nickName;
    private String uuid;
}
