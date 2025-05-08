package com.web.backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "galeria")
public class Galeria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imagen;
    private String titulo;
    private LocalDate fecha;
    private String ubicacion;

    // Getters y Setters
    public LocalDate getFecha() {
        return fecha;
    }
    public Long getId() {
        return id;
    }
    public String getImagen() {
        return imagen;
    }
    public String getTitulo() {
        return titulo;
    }
    public String getUbicacion() {
        return ubicacion;
    }
    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }
}
