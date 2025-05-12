package com.web.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.backend.model.Contacto;
import com.web.backend.model.User;
import com.web.backend.repository.ContactoRepository;
import com.web.backend.service.MensajesService;

@RestController
@RequestMapping("/api/mensajes")
public class MensajesController {

    @Autowired
    private MensajesService mensajesService;

    @Autowired
    private ContactoRepository contactoRepository;

    @GetMapping("/obtener-mensajes")
    public List<Contacto> obtenerMensajes() {
        return mensajesService.obtenerMensajes();
    }

    @PutMapping("/mensajes/leido")
    public ResponseEntity<Void> marcarComoLeido(@RequestParam Long id) {
        mensajesService.marcarComoLeido(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/mensaje/{id}")
    public ResponseEntity<Contacto> obtenerMensajePorId(@PathVariable Long id) {
        Optional<Contacto> mensaje = mensajesService.obtenerMensajePorId(id);
        return mensaje.map(ResponseEntity::ok)
                    .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/mensajes/buscar")
    public ResponseEntity<List<Contacto>> buscarMensajes(@RequestParam String input) {
        List<Contacto> resultados = mensajesService.buscarPorIdNombreOEmail(input);
        return ResponseEntity.ok(resultados);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminarMensaje(@PathVariable Long id) {
        try {
            contactoRepository.deleteById(id);
            return ResponseEntity.ok().body("Mensaje eliminado correctamente");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al eliminar el mensaje");
        }
    }
}
