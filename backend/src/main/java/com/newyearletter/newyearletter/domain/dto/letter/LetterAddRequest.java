package com.newyearletter.newyearletter.domain.dto.letter;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class LetterAddRequest {
    private String author;
    private String content;
    private Integer money;
}
