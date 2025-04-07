package com.web.backend.payload.request;

import jakarta.validation.constraints.NotBlank;

public class LoginRequest {
	@NotBlank
  private String email;

	@NotBlank
	private String password_hash;

	public String getEmail() {
		return email;
	}

	public void setUsername(String email) {
		this.email = email;
	}

	public String getPassword_hash() {
		return password_hash;
	}

	public void setPassword_hash(String password_hash) {
		this.password_hash = password_hash;
	}

}