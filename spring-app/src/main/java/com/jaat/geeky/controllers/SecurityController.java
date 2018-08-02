package com.jaat.geeky.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class SecurityController {

    @GetMapping(
            value = "security",
            produces = "application/json"
    )
    public String isSecure() {
        return "{\n" +
                "  \"isSecure\": true\n" +
                "}";
    }

    @GetMapping(
            value = "/version",
            produces = "application/json"
    )
    public String version() {
        return "{\"version\":\"1.0.6\"}";
    }

    @RequestMapping(
            value = "/login",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE
    )
    public ResponseEntity<User> login(
            @RequestBody MultiValueMap<String, String> formData
    ) {
        String username = formData.getFirst("username");
        String password = formData.getFirst("password");
        if (username.equals("admin") && password.equals("admin")) {
            return ResponseEntity.ok(new User(username));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
