//package com.newyearletter.newyearletter.controller;
//
//import com.newyearletter.newyearletter.domain.dto.Response;
//import com.newyearletter.newyearletter.domain.dto.letter.LetterAddRequest;
//import com.newyearletter.newyearletter.domain.dto.letter.LetterAddResponse;
//import com.newyearletter.newyearletter.domain.dto.letter.LetterPageResponse;
//import com.newyearletter.newyearletter.service.LetterService;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/letter")
//@RequiredArgsConstructor
//@Slf4j
//public class LetterController {
//
//    private final LetterService letterService;
//    private final String sMailboxTitle = "우체통";
//
//    @GetMapping("/getMailboxTitle")
//    public String getMailboxTitle() {
//        return this.sMailboxTitle;
//    }

//    @GetMapping("/{uuid}")
//    public Response<LetterPageResponse> letterPage(@PathVariable String uuid){
//        LetterPageResponse letterPageResponse = letterService.findUuid(uuid);
//        return Response.success(letterPageResponse);
//    }
//
//    @PostMapping("/{uuid}")
//    public Response<LetterAddResponse> saveLetter(@PathVariable String uuid, @RequestBody LetterAddRequest request){
//        LetterAddResponse letterAddResponse = letterService.saveLetter(uuid, request);
//        return Response.success(letterAddResponse);
//    }


//}
