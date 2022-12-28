package com.newyearletter.newyearletter.domain.dto.rabbit;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class RabbitResponse {
    private String nickName;
    private String wish;
    private Integer money;
    private String custom;
}
