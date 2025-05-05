package com.web.backend.dto;

public class AdminDto {
    private String email;
    private String password;
    private String rol;

    // Getters y setters
    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }
    public String getRol() {
        return rol;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public void setRol(String rol) {
        this.rol = rol;
    }
}

