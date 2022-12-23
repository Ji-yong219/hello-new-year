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

    @Column(name = "ID")
    private String userId;

    @Column(name = "PassWord")
    private String password;

    @Column(name = "NickName")
    private String nickName;

    @Column(name = "URL")
    private String url;
}
