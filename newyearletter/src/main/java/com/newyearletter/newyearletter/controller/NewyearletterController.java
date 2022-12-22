package com.newyearletter.newyearletter.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
 * 
 * 파일명 : NewyearletterController.java
 * 설명 : new year letter 메인 화면 컨트롤러
 * 날짜 : 2022. 12. 23.
 * 작성자 : 박지용
 * 변경 이력 : 
 */
@SpringBootApplication
@RestController
public class NewyearletterController {

	public static void main(String[] args) {
		SpringApplication.run(NewyearletterController.class, args);
	}

	@RequestMapping("/") //, method={RequestMethod.POST, RequestMethod.PUT})
	String indexPage() {
		return "2023 New Year's Resoulution & Letter Service";
	}

}
