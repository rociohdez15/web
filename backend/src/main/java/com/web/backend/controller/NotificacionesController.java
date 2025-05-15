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
import com.web.backend.model.Notificacion;
import com.web.backend.model.User;
import com.web.backend.repository.ContactoRepository;
import com.web.backend.repository.NotificacionRepository;
import com.web.backend.service.MensajesService;
import com.web.backend.service.NotificacionService;

@RestController
@RequestMapping("/api/notificaciones")
public class NotificacionesController {

    @Autowired
    private NotificacionService notificacionesService;

    @Autowired
    private NotificacionRepository notificacionRepository;

    @GetMapping("/obtener-notificaciones")
    public List<Notificacion> obtenerNotificaciones() {
        return notificacionesService.obtenerNotificaciones();
    }

    @PutMapping("/notificaciones/leido")
    public ResponseEntity<Void> marcarComoLeido(@RequestParam Long id) {
        notificacionesService.marcarComoLeido(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/notificacion/{id}")
    public ResponseEntity<Notificacion> obtenerNotificacionPorId(@PathVariable Long id) {
        Optional<Notificacion> notificacion = notificacionesService.obtenerNotificacionPorId(id);
        return notificacion.map(ResponseEntity::ok)
                    .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/notificaciones/buscar")
    public ResponseEntity<List<Notificacion>> buscarNotificacion(@RequestParam String input) {
        List<Notificacion> resultados = notificacionesService.buscarPorIdOTipo(input);
        return ResponseEntity.ok(resultados);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminarNotificacion(@PathVariable Long id) {
        try {
            notificacionRepository.deleteById(id);
            return ResponseEntity.ok().body("Notificación eliminada correctamente");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al eliminar la notificación");
        }
    }
}
