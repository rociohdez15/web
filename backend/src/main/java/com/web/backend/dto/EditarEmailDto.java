package com.web.backend.dto;

import jakarta.validation.constraints.NotBlank;

public class EditarEmailDto {

    @NotBlank
    private String email;

    public EditarEmailDto() {}

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
