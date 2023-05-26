package com.newyearletter.newyearletter.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.newyearletter.newyearletter.service.LetterService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest(LetterController.class)
@MockBean(JpaMetamodelMappingContext.class)
class LetterControllerTest {

    @Autowired
    MockMvc mockMvc;

    @MockBean
    LetterService letterService;

    @Autowired
    ObjectMapper objectMapper;

    @Test
    @DisplayName("편지 작성 페이지 성공")
    void letterPage_success() throws Exception{
        String url = "/api/letter/12345";

    }




}