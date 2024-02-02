package com.pessom.todo.jwtutils;

import java.util.ArrayList;

import org.springframework.security.core.userdetails.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Password is password
        if ("sobunge".equals(username)) {
            return new User("sobunge", encoder.encode("password"),
                    new ArrayList<>());
        } else {
            throw new UnsupportedOperationException("Unimplemented method 'loadUserByUsername'");
        }

    }

}
