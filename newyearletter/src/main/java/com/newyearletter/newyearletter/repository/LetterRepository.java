package com.newyearletter.newyearletter.repository;

import com.newyearletter.newyearletter.domain.entity.Letter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LetterRepository extends JpaRepository<Letter, Integer> {
}
