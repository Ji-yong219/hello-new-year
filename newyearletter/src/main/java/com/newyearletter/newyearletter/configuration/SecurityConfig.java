package com.newyearletter.newyearletter.configuration;

import com.newyearletter.newyearletter.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final UserService userService;
    @Value("${jwt.token.secret}")
    private String secretKey;
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .httpBasic().disable() //HTTP 기본 인증 구성
                .csrf().disable()//csrf보호 활성화, 비활성화(disable) 가능
                .cors().and()//CorsFilter를 사용한다.
                .authorizeRequests() //사용권장
                // 경로지정 맵핑
                .antMatchers("/api/users/join", "/api/users/login").permitAll() // join, login은 언제나 가능
//                .antMatchers(HttpMethod.GET,"/api/letter/myPage/**").permitAll()
                .antMatchers(HttpMethod.GET,"/api/letter/myPage/**").authenticated()
                .antMatchers(HttpMethod.GET,"/api/**").permitAll()
//                .antMatchers(HttpMethod.POST,"/api/**").permitAll()
                .and()
                .sessionManagement()// 세션관리구성
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .addFilterBefore(new JwtTokenFilter(userService, secretKey), UsernamePasswordAuthenticationFilter.class)
                .build();
    }
}