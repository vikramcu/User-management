package com.example.ums.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "*")
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Welcome to User Management System API! Visit /api/users for user operations.";
    }

    @GetMapping("/health")
    public String health() {
        return "User Management System is running!";
    }
}
