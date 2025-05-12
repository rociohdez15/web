package com.web.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.backend.model.Contacto;
import com.web.backend.model.User;
import com.web.backend.service.MensajesService;

@RestController
@RequestMapping("/api/mensajes")
public class MensajesController {

    @Autowired
    private MensajesService mensajesService;

    @GetMapping("/obtener-mensajes")
    public List<Contacto> obtenerMensajes() {
        return mensajesService.obtenerMensajes();
    }

    @PutMapping("/mensajes/leido")
    public ResponseEntity<Void> marcarComoLeido(@RequestParam Long id) {
        mensajesService.marcarComoLeido(id);
        return ResponseEntity.noContent().build();
    }

}
