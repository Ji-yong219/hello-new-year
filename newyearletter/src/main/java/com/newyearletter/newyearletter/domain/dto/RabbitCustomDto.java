package com.newyearletter.newyearletter.domain.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
@AllArgsConstructor
public class RabbitCustomDto {
    private String wish;
    private String custom;
}
