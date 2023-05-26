package com.newyearletter.newyearletter.repository;

import com.newyearletter.newyearletter.domain.entity.Letter;
import com.newyearletter.newyearletter.domain.entity.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LetterRepository extends JpaRepository<Letter, Integer> {

}
