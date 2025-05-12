package com.web.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.backend.model.Contacto;
import com.web.backend.model.User;
import com.web.backend.repository.ContactoRepository;
import com.web.backend.repository.UserRepository;

@Service
public class MensajesService {

    @Autowired
    private ContactoRepository contactoRepository;

    public List<Contacto> obtenerMensajes() {
        return (List<Contacto>) contactoRepository.findAll(); // Obtener todos los mensajes
    }

    public void marcarComoLeido(Long id) {
        Contacto mensaje = contactoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Mensaje no encontrado con ID: " + id));
        mensaje.setRead(true);
        contactoRepository.save(mensaje);
    }
}
