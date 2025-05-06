package com.web.backend.controller;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.backend.model.Evento;
import com.web.backend.repository.EventoRepository;
import com.web.backend.service.AdminPanelService;

@RestController
@RequestMapping("/api/eventos")
public class EventosController {

    @Autowired
    private EventoRepository eventoRepository;

    @Autowired
    private AdminPanelService adminPanelService;

    @PostMapping("/crear-evento")
    public ResponseEntity<String> crearEventoTest(@RequestParam String nombre, @RequestParam String fecha,
            @RequestParam String hora) {
        System.out.println("Nombre recibido: " + nombre);
        System.out.println("Fecha recibida: " + fecha);
        System.out.println("Hora recibida: " + hora);

        // Parsear la fecha y hora recibidas
        DateTimeFormatter fechaFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        DateTimeFormatter horaFormatter = DateTimeFormatter.ofPattern("HH:mm");

        LocalDate fechaParsed = LocalDate.parse(fecha, fechaFormatter);
        LocalTime horaParsed = LocalTime.parse(hora, horaFormatter);

        // Crear un nuevo evento
        Evento evento = new Evento();
        evento.setNombre(nombre);
        evento.setFecha(fechaParsed); // Establecer la fecha
        evento.setHora(horaParsed); // Establecer la hora

        // Guardar el evento en la base de datos
        eventoRepository.save(evento);

        return ResponseEntity.ok("Evento creado");
    }

    @GetMapping("/obtener-eventos")
    public List<Evento> obtenerEventos() {
        return adminPanelService.obtenerEventos();
    }

}
