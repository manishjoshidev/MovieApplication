package com.example.demo.Controller;

import com.example.demo.Model.User;
import com.example.demo.Services.UserDetailService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/Home")
public class HomeController {
    @Autowired
    private UserDetailService userDetailService;
    //http://localhost:8080/users
    @GetMapping("/users")
    public List<User> getUser(){
        System.out.println("getting users");
        return this.userDetailService.getUsers();
    }

    }


