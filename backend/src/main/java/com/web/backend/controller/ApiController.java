package com.web.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    // Endpoint GET
    @GetMapping("/api/endpoint")
    public String getData() {
        return "{\"message\": \"Hello from the backend!\"}";
    }
}

