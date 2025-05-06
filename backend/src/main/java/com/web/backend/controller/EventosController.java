package com.web.backend.controller;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.backend.dto.EditarEmailDto;
import com.web.backend.dto.EventoRequestDto;
import com.web.backend.model.Evento;
import com.web.backend.model.User;
import com.web.backend.repository.EventoRepository;
import com.web.backend.service.AdminPanelService;
import com.web.backend.service.EventoService;

@RestController
@RequestMapping("/api/eventos")
public class EventosController {

    @Autowired
    private EventoRepository eventoRepository;

    @Autowired
    private AdminPanelService adminPanelService;

    @Autowired
    private EventoService eventoService;

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

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminarEvento(@PathVariable Long id) {
        try {
            eventoRepository.deleteById(id);
            return ResponseEntity.ok().body("Evento eliminado correctamente");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al eliminar el evento");
        }
    }

    @PutMapping("/editar/{id}")
    public ResponseEntity<?> editarEvento(
            @PathVariable Long id,
            @RequestParam String nombre,
            @RequestParam String fecha,
            @RequestParam String hora) {

        Optional<Evento> eventoOpt = eventoRepository.findById(id);

        if (eventoOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Evento no encontrado");
        }

        try {
            Evento evento = eventoOpt.get();
            evento.setNombre(nombre);
            evento.setFecha(LocalDate.parse(fecha)); // formato: yyyy-MM-dd
            evento.setHora(LocalTime.parse(hora)); // formato: HH:mm

            eventoRepository.save(evento);

            return ResponseEntity.ok("Evento actualizado correctamente");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error al actualizar el evento: " + e.getMessage());
        }
    }

    @GetMapping("/buscar")
    public ResponseEntity<?> buscarPorIdONombre(@RequestParam String input) {
        List<Evento> resultados = eventoService.buscarPorIdONombre(input);
        if (resultados.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontraron resultados.");
        }
        return ResponseEntity.ok(resultados);
    }
    
}
