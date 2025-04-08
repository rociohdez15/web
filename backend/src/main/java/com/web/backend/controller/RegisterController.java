package com.web.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.web.backend.dto.RegisterRequestDto;
import com.web.backend.service.RegisterService;

@RestController
@RequestMapping("/auth")
public class RegisterController {

    @Autowired
    private RegisterService registroService;

    @PostMapping("/register")
public String register(@RequestBody RegisterRequestDto registerRequestDto) {
    try {
        return registroService.registrarUsuario(registerRequestDto);
    } catch (IllegalArgumentException e) {
        return e.getMessage(); // Mensaje de error si el email ya existe
    } catch (Exception e) {
        return "Hubo un error al registrar el usuario.";
    }
}
}
