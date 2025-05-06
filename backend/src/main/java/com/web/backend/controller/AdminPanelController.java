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
import com.web.backend.dto.NotificacionRequestDto;
import com.web.backend.model.Contacto;
import com.web.backend.model.Evento;
import com.web.backend.model.Proyecto;
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

    @GetMapping("/obtener-eventos")
    public List<Evento> obtenerEventos() {
        return adminPanelService.obtenerEventos();
    }

    @GetMapping("/obtener-proyectos")
    public List<Proyecto> obtenerProyectos() {
        return adminPanelService.obtenerProyectos();
    }

    @GetMapping("/obtener-form-contactos")
    public List<Contacto> obtenerFormContacto() {
        return adminPanelService.obtenerFormContacto();
    }

    @GetMapping("/obtener-notificaciones")
    public ResponseEntity<List<NotificacionRequestDto>> getAll() {
        return ResponseEntity.ok(adminPanelService.obtenerNotificaciones());
    }
}
