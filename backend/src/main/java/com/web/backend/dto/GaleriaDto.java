package com.web.backend.dto;

public class GaleriaDto {
    private String imagen;
    private String titulo;
    private String fecha;
    private String ubicacion;

    // Getters y Setters
    public String getFecha() {
        return fecha;
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
    public void setFecha(String fecha) {
        this.fecha = fecha;
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

