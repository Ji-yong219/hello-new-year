package com.newyearletter.newyearletter.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class LetterController {
    private final String sAppTitle = "(가제)New Year Letter";
    private final String sMailboxTitle = "우체통";
    @RequestMapping("/") //, method={RequestMethod.POST, RequestMethod.PUT})
    String indexPage() {
        return "2023 New Year's Resoulution & Letter Service";
    }

    @GetMapping("/api/getAppTitle")
    public String getAppTitle() {
        return this.sAppTitle;
    }

    @GetMapping("/api/getMailboxTitle")
    public String getMailboxTitle() {
        return this.sMailboxTitle;
    }
}
