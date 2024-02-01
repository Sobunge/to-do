package com.pessom.todo.jwtutils;

import java.util.ArrayList;

import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if ("sobunge".equals(username)) {
            return new User("sobunge", "$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
                    new ArrayList<>());
        } else {
            throw new UnsupportedOperationException("Unimplemented method 'loadUserByUsername'");
        }

    }

}
