package com.pessom.todo.jwtutils.model;

import java.io.Serializable;

public class JwtResponseModel implements Serializable {

    private static final long serialVersionUID = 1L;
    private final String token;

    private JwtResponseModel(String token) {
        this.token = token;
    }

    private String getToken() {
        return token;
    }
}
