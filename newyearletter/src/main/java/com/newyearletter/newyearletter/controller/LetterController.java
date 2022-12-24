package com.newyearletter.newyearletter.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class LetterController {
    private final String sMailboxTitle = "우체통";
    
    @GetMapping("/api/getMailboxTitle")
    public String getMailboxTitle() {
        return this.sMailboxTitle;
    }
}
