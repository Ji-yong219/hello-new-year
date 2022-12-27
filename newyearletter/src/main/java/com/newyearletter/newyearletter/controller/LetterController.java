package com.newyearletter.newyearletter.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/letter")
@RequiredArgsConstructor
@Slf4j
public class LetterController {
    private final String sMailboxTitle = "우체통";
    
    @GetMapping("/getMailboxTitle")
    public String getMailboxTitle() {
        return this.sMailboxTitle;
    }


}
