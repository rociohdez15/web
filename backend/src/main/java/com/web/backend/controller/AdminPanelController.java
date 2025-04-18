package com.web.backend.controller;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.backend.dto.EventoRequestDto;
import com.web.backend.model.Evento;
import com.web.backend.repository.EventoRepository;
import com.web.backend.repository.ProveedorRepository;
import com.web.backend.service.AdminPanelService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/admin")
public class AdminPanelController {

    @Autowired
    private ProveedorRepository proveedorRepository;

    @Autowired
    private AdminPanelService adminPanelService;

    @Autowired
    private EventoRepository eventoRepository;

    @GetMapping("/total-proveedores")
    public ResponseEntity<Long> getTotalProveedores() {
        long total = proveedorRepository.count();
        return ResponseEntity.ok(total);
    }
    @GetMapping("/total-ingresos")
    public ResponseEntity<Double> getTotalIngresos() {
        Double totalIngresos = adminPanelService.getTotalIngresos();
        return ResponseEntity.ok(totalIngresos);
    }

    @GetMapping("/total-reservas")
    public ResponseEntity<String> getTotalReservas() {
        String totalReservas = adminPanelService.getTotalReservas();
        return ResponseEntity.ok(totalReservas);
    }

    @GetMapping("/total-usuarios")
    public ResponseEntity<String> getTotalUsuarios() {
        String totalUsuarios = adminPanelService.getTotalUsuarios();
        return ResponseEntity.ok(totalUsuarios);
    }

    @GetMapping("/ingresos-semana-actual")
    public ResponseEntity<BigDecimal> obtenerIngresosSemanaActual() {
        BigDecimal ingresos = adminPanelService.calcularIngresosSemanaActual();
        return ResponseEntity.ok(ingresos);
    }

    @GetMapping("/ingresos-semana-anterior")
    public ResponseEntity<BigDecimal> obtenerIngresosSemanaAnterior() {
        BigDecimal ingresos = adminPanelService.obtenerIngresosSemanaAnterior();
        return ResponseEntity.ok(ingresos);
    }

    @GetMapping("/ventas-semana-actual")
    public ResponseEntity<BigDecimal> obtenerVentasSemanaActual() {
        BigDecimal totalVentas = adminPanelService.calcularVentasSemanaActual();
        return ResponseEntity.ok(totalVentas);
    }

    @GetMapping("/ingresos-y-ventas-semana")
    public ResponseEntity<Map<String, Object>> obtenerIngresosYReservasSemana() {
        Map<String, Object> data = adminPanelService.obtenerIngresosYVentasPorDiaDeSemana();
        return ResponseEntity.ok(data);
    }

    @GetMapping("/ventas-anuales")
    public ResponseEntity<Map<String, Integer>> obtenerVentasAnuales() {
        Map<String, Integer> datos = adminPanelService.obtenerVentasPorMes();
        return ResponseEntity.ok(datos);
    }

    @GetMapping("/ingresos-primer-trimestre")
    public ResponseEntity<BigDecimal> obtenerIngresosPrimerTrimestre() {
        BigDecimal ingresos = adminPanelService.calcularIngresosPrimerTrimestre();
        return ResponseEntity.ok(ingresos != null ? ingresos : BigDecimal.ZERO);
    }

    @GetMapping("/ingresos-segundo-trimestre")
    public ResponseEntity<BigDecimal> obtenerIngresosSegundoTrimestre() {
        BigDecimal ingresos = adminPanelService.calcularIngresosSegundoTrimestre();
        return ResponseEntity.ok(ingresos != null ? ingresos : BigDecimal.ZERO);
    }

    @GetMapping("/ingresos-tercer-trimestre")
    public ResponseEntity<BigDecimal> obtenerIngresosTercerTrimestre() {
        BigDecimal ingresos = adminPanelService.calcularIngresosTercerTrimestre();
        return ResponseEntity.ok(ingresos != null ? ingresos : BigDecimal.ZERO);
    }

    @PostMapping("/crear-evento-test")
    public ResponseEntity<String> crearEventoTest(@RequestParam String nombre, @RequestParam String fecha, @RequestParam String hora) {
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
        evento.setFecha(fechaParsed);  // Establecer la fecha
        evento.setHora(horaParsed);    // Establecer la hora
    
        // Guardar el evento en la base de datos
        eventoRepository.save(evento);
    
        return ResponseEntity.ok("Evento creado");
    }

    @GetMapping("/obtener-eventos")
    public List<Evento> obtenerEventos() {
        return adminPanelService.obtenerEventos();
    }

}
