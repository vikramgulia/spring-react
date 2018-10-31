package com.jaat.geeky.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DefaultModelController {

    @GetMapping(value = "/default", produces = "text/html")
    public String zDefaultPage() {
        return "default";
    }
}
