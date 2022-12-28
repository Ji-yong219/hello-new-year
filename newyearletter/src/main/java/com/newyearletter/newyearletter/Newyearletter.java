package com.newyearletter.newyearletter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/*
 * 
 * 파일명	: NewyearletterController.java
 * 설명		: new year letter 메인 화면 컨트롤러
 * 날짜		: 2022. 12. 23.
 * 작성자	: 박지용
 * 변경 이력
 * 2022. 12. 23.	박지용	최초 생성
 * 2022. 12. 23. 	박지용	getAppTitle(), getMailboxTitle 추가
 */

@EnableJpaAuditing
@SpringBootApplication
public class Newyearletter {

	public static void main(String[] args) {
		SpringApplication.run(Newyearletter.class, args);
	}

}
