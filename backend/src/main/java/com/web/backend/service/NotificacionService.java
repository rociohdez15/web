package com.web.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.backend.model.Contacto;
import com.web.backend.model.Notificacion;
import com.web.backend.model.User;
import com.web.backend.repository.ContactoRepository;
import com.web.backend.repository.NotificacionRepository;
import com.web.backend.repository.UserRepository;

@Service
public class NotificacionService {

    @Autowired
    private NotificacionRepository notificacionRepository;

    public List<Notificacion> obtenerNotificaciones() {
        return (List<Notificacion>) notificacionRepository.findAll(); // Obtener todos los mensajes
    }

    public void marcarComoLeido(Long id) {
        Notificacion notificacion = notificacionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Notificación no encontrado con ID: " + id));
        notificacion.setRead(true);
        notificacionRepository.save(notificacion);
    }

    public Optional<Notificacion> obtenerNotificacionPorId(Long id) {
        return notificacionRepository.findById(id);
    }

    public List<Notificacion> buscarPorIdOTipo(String input) {
        try {
            Long id = Long.parseLong(input);
            return notificacionRepository.findByIdEquals(id);
        } catch (NumberFormatException e) {
            return (List<Notificacion>) (List<?>) notificacionRepository.findByTipo(input);

        }
    }
}
