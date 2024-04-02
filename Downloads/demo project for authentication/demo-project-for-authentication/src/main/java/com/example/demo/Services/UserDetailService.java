package com.example.demo.Services;



import com.example.demo.Model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class UserDetailService {
private List<User>store=new ArrayList<>();

    public UserDetailService() {
        store.add(new User(UUID.randomUUID().toString(),"manish","mani@gmail.com"));
        store.add(new User(UUID.randomUUID().toString(),"max","man43@gmail.com"));
        store.add(new User(UUID.randomUUID().toString(),"mango","mani43@gmail.com"));

    }
    public List<User>getUsers()
    {
        return this.store;  //store is a list of users
    }
}
