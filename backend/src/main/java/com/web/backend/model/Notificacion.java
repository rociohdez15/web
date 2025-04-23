package com.web.backend.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "notificaciones")
public class Notificacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String tipo;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cliente_id")
    private Client cliente;
    private LocalDateTime fecha;

    
    public Client getCliente() {
        return cliente;
    }
    public LocalDateTime getFecha() {
        return fecha;
    }
    public Long getId() {
        return id;
    }
    public String getTipo() {
        return tipo;
    }
    public void setCliente(Client cliente) {
        this.cliente = cliente;
    }
    public void setFecha(LocalDateTime fecha) {
        this.fecha = fecha;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
}
