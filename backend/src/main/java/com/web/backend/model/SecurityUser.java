package com.web.backend.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@AllArgsConstructor
@NoArgsConstructor
public class SecurityUser implements UserDetails {

    private User user;
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(new SimpleGrantedAuthority(user.getRol()));
    }

    @Override
    public String getPassword() {
        return user.getPassword_hash();
    }

    @Override
    public String getUsername() {
        return user.getEmail();
    }
}