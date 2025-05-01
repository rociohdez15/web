package com.web.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.backend.model.Evento;
import com.web.backend.model.User;
import com.web.backend.repository.UserRepository;

@Service
public class AdminsService {

    @Autowired
    private UserRepository usuarioRepository;

    public List<User> obtenerAdmins() {
        return (List<User>) usuarioRepository.findAll(); // Obtener todos los eventos
    }

    public Optional<User> buscarPorIdOEmail(String input) {
        try {
            Long id = Long.parseLong(input);
            return usuarioRepository.findById(id);
        } catch (NumberFormatException e) {
            String email = input;
            return Optional.ofNullable(usuarioRepository.findByEmail(email));
        }
    }
    
}
