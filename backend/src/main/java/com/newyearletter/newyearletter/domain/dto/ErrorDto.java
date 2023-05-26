package com.newyearletter.newyearletter.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ErrorDto {
    private String errorCode;
    private String message;
}
