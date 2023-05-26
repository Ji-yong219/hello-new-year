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
//@EnableWebSecurity
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
                .exceptionHandling()
                .authenticationEntryPoint(new CustomAuthenticationEntryPoint())
                .and()
                .authorizeRequests() //사용권장
                // 경로지정 맵핑
                .antMatchers("/api/users/join", "/api/users/login").permitAll() // join, login은 언제나 가능
                .antMatchers(HttpMethod.GET,"/api/rabbit/mypage/**").authenticated()
                .antMatchers(HttpMethod.GET,"/api/letter/**/getLetter").authenticated()
                .antMatchers(HttpMethod.GET,"/api/letter/**/getLetter/**").authenticated()
                .antMatchers(HttpMethod.POST,"/api/letter/**").permitAll()
                .antMatchers(HttpMethod.GET,"/api/**").permitAll()
                .antMatchers(HttpMethod.POST,"/api/**").authenticated()
                .and()
                .sessionManagement()// 세션관리구성
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // jwt사용하는 경우 씀, 스프링 시큐리티는 HttpSession을 생성하지 않고, SecurityContext를 얻기 위해 사용하지 않는다
                .and()
                .addFilterBefore(new JwtTokenFilter( userService, secretKey), UsernamePasswordAuthenticationFilter.class) //UserNamePasswordAuthenticationFilter적용하기 전에 JWTTokenFilter를 적용 하라는 뜻 입니다.
                .build();
    }
}