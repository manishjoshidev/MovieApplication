package com.example.demo.Config;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class AppConfig {
@Bean

public UserDetailsService userDetailsService (){
   UserDetails user1= User.builder()
            .username("manish")
            .password(passwordEncoder().encode("man"))
            .roles("ADMIN").build();
    UserDetails user2= User.builder()
            .username("lewis")
            .password(passwordEncoder().encode("man"))
            .roles("ADMIN").build();
return new InMemoryUserDetailsManager(user1,user2);//in its constructor there is var argument constructor,so we can pass multiple values
}
@Bean
public PasswordEncoder passwordEncoder()
{
    return new BCryptPasswordEncoder();
}
}

//userDetailService(spring security method) will be used to fetch user details