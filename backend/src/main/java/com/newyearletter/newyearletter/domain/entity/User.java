package com.newyearletter.newyearletter.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseEntity{

    /**
     * persist 되기 전 실행
     */
    @PrePersist
    public void prePersist(){
        this.money = this.money == null ? 0 : this.money;
        this.custom = this.custom == null ? "1;1;2;1;0" : this.custom;
        this.wish = this.wish == null ? "2023년은 행복한 일만 가득하길" : this.wish;
    }
    
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

    private String uuid;

    private Integer money;

    private String custom;

    private String wish;

    @OneToMany(mappedBy = "user")
    private List<Letter> letters = new ArrayList<>();

    public void update(String wish, String custom) {
        this.wish = wish;
        this.custom = custom;
    }

    public void updateLetter(Letter letter, Integer money) {
        this.letters.add(letter);
        this.money += money;
    }
}
