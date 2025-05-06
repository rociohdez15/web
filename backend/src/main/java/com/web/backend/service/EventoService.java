package com.web.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.backend.model.Evento;
import com.web.backend.repository.EventoRepository;


@Service
public class EventoService {

    @Autowired
    private EventoRepository eventoRepository;

    public Optional<Evento> buscarPorIdONombre(String input) {
    try {
        Long id = Long.parseLong(input);
        return eventoRepository.findById(id);
    } catch (NumberFormatException e) {
        return eventoRepository.findByNombre(input);
    }
}
}
