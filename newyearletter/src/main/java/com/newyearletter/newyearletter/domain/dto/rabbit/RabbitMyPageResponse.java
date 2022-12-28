package com.newyearletter.newyearletter.domain.dto.rabbit;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class RabbitMyPageResponse {
    private String nickName;
    private Integer money;
    private String custom;
    private String wish;
}
