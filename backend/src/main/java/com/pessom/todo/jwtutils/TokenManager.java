package com.pessom.todo.jwtutils;

import java.io.Serializable;
import java.security.Signature;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.micrometer.core.instrument.config.validate.Validated.Secret;

@Component
public class TokenManager implements Serializable {

    private static final long serialVersionUID = 7008375124389347049L;
    public static final long TOKEN_VALIDITY = 10 * 60 * 60;

    @Value("${secret}")
    private String jwtSecret;

    private String generateJwtToken(UserDetails userDetails) {

        Map<String, Object> claims = new HashMap<>();

        return Jwts.builder().claims(claims)
                .subject(userDetails.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + TOKEN_VALIDITY * 1000))
                .signWith(key()).compact();

    }

    private Boolean validateJwtToken(String token, UserDetails userDetails) {

        String username = getUsernameFromToken(token);
        final Claims claims = Jwts.parser().decryptWith(this.key()).build().parseSignedClaims(token).getPayload();
        Boolean isTokenExpired = claims.getExpiration().before(new Date());

        return (username.equals(userDetails.getUsername()) && !isTokenExpired);
    }

    private String getUsernameFromToken(String token) {

        final Claims claims = Jwts.parser().decryptWith(this.key()).build().parseSignedClaims(token).getPayload();

        return claims.getSubject();
    }

    private SecretKey key() {
        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
    }

}