package com.web.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.web.backend.repository.ProveedorRepository;
import com.web.backend.service.AdminPanelService;

@RestController
@RequestMapping("/api/admin")
public class AdminPanelController {

    @Autowired
    private ProveedorRepository proveedorRepository;

    @Autowired
    private AdminPanelService adminPanelService;

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
}
