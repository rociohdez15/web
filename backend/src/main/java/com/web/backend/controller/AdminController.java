package com.web.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.backend.model.Evento;
import com.web.backend.model.User;
import com.web.backend.service.AdminsService;

@RestController
@RequestMapping("/api/rol-admin")
public class AdminController {

    @Autowired
    private AdminsService adminsService;


    @GetMapping("/obtener-admins")
    public List<User> obtenerAdmins() {
        return adminsService.obtenerAdmins();
    }

    @GetMapping("/buscar")
    public ResponseEntity<?> buscarUsuario(@RequestParam String input) {
    Optional<User> usuario = adminsService.buscarPorIdOEmail(input);

    if (usuario.isPresent()) {
        return ResponseEntity.ok(usuario.get());
    } else {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontraron resultados.");
    }
}

}
