package com.newyearletter.newyearletter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class NewyearletterApplication {

	public static void main(String[] args) {
		SpringApplication.run(NewyearletterApplication.class, args);
	}

	@RequestMapping("/")
	String indexPage() {
		return "2023 New Year's Resoulution & Letter Service";
	}

}
