package com.newyearletter.newyearletter.configuration;

import com.newyearletter.newyearletter.domain.entity.User;
import com.newyearletter.newyearletter.service.UserService;
import com.newyearletter.newyearletter.utils.JwtTokenUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RequiredArgsConstructor
@Slf4j
public class JwtTokenFilter extends OncePerRequestFilter {

    private final UserService userService;

    @Value("${jwt.token.secret}")
    private final String secretKey;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        final String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        log.info("authorizationHeader:{}",authorizationHeader);

        if(authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")){
            log.error("헤더가 null이거나 잘못되었습니다.");
            filterChain.doFilter(request, response);
            return;
        }

        final String token;
        //token분리
        try{
            token = authorizationHeader.split(" ")[1];
        }catch(Exception e){
            log.error("token 추출 실패");
            filterChain.doFilter(request,response);
            return;
        }

        //token만료 체크
        if(JwtTokenUtil.isExpired(token, secretKey)){
            filterChain.doFilter(request, response);
            return;
        };

        //userName 꺼내기
        String userName = JwtTokenUtil.getUserName(token, secretKey);
        log.info("userName:{}", userName);

        //userDetail가져오기
        User user = userService.getUserByUserId(userName);

        //권한여부경정
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userName, null, List.of(new SimpleGrantedAuthority("USER")));
        authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        filterChain.doFilter(request, response);

    }
}


