package com.newyearletter.newyearletter.domain.dto;


import com.newyearletter.newyearletter.domain.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserJoinRequest {
    private String userID;
    private String password;
    private String nickName;

    public User toEntity(String url, String password) {
        return User.builder()
                .userID(this.userID)
                .password(password)
                .nickName(this.nickName)
                .url(url)
                .build();
    }
}
