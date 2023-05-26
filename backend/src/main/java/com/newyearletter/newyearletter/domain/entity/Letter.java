package com.newyearletter.newyearletter.domain.entity;

import com.newyearletter.newyearletter.domain.dto.letter.LetterAddRequest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Letter extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String author;
    private String content;
    private Integer money;

    @ManyToOne
    @JoinColumn(name = "user_seq")
    private User user;



    public static Letter toEntity(LetterAddRequest request, User user) {
        return Letter.builder()
                .author(request.getAuthor())
                .content(request.getContent())
                .money(request.getMoney())
                .user(user)
                .build();
    }
}
