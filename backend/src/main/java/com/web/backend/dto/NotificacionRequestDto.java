package com.web.backend.dto;

import java.time.LocalDateTime;

import com.web.backend.model.Notificacion;

public class NotificacionRequestDto {

    private Long id;
    private String tipo;
    private String nombreCompleto;
    private LocalDateTime fecha;

    public NotificacionRequestDto(Notificacion n) {
        this.id = n.getId();
        this.tipo = n.getTipo();
        this.nombreCompleto = n.getCliente().getNombre() + " " + n.getCliente().getApellidos();
        this.fecha = n.getFecha();
    }

    // Getters y Setters
    public LocalDateTime getFecha() {
        return fecha;
    }
    public Long getId() {
        return id;
    }
    public String getNombreCompleto() {
        return nombreCompleto;
    }
    public String getTipo() {
        return tipo;
    }
    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public void setNombreCompleto(String nombreCompleto) {
        this.nombreCompleto = nombreCompleto;
    }
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}

