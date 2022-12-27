package com.newyearletter.newyearletter.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UserSeq")
    private Integer seq;

    @Column(name = "userID")
    private String userID;

    @Column(name = "PassWord")
    private String password;

    @Column(name = "NickName")
    private String nickName;

    @Column(name = "uuid")
    private String uuid;

    @Column(name = "money")
    private Integer money;

    @Column(name = "custom")
    private String custom;

    @Column(name = "wish")
    private String wish;

    public void update(String wish, String custom) {
        this.wish = wish;
        this.custom = custom;
    }
}
