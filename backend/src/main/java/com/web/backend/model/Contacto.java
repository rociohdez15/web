package com.web.backend.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "formulario_contacto")
public class Contacto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String email;
    private String mensaje;
    private LocalDate fecha;
    private boolean isRead;

    public String getEmail() {
        return email;
    }
    public LocalDate getFecha() {
        return fecha;
    }
    public Long getId() {
        return id;
    }
    public String getMensaje() {
        return mensaje;
    }
    public String getNombre() {
        return nombre;
    }

    public Boolean isRead() {
        return isRead;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setRead(boolean isRead) {
        this.isRead = isRead;
    }
}
