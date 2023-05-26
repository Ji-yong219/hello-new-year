package com.newyearletter.newyearletter.exception;

import com.newyearletter.newyearletter.domain.dto.ErrorDto;
import com.newyearletter.newyearletter.domain.dto.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionManager {

    @ExceptionHandler(AppException.class)
    public ResponseEntity<?> joinExceptionHandler(AppException e){
        return ResponseEntity.status(e.getErrorCode().getStatus())
                .body(Response.error(new ErrorDto(e.getErrorCode().name(), e.getMessage())));
    }
}
