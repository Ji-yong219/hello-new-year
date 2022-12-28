package com.newyearletter.newyearletter.domain.dto.rabbit;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class RabbitMyPageResponse {
    private String nickName;
    private Integer money;
    private String custom;
    private String wish;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd' 'HH:mm:ss", timezone = "Asia/Seoul")
    private LocalDateTime currentDateTime;
}
