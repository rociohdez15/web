package com.web.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "clientes")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String apellidos;
    private String dni;
    private String direccion;
    private String telefono;
    private String fechaNacimiento;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private User usuario;

    // Getters y Setters
    public String getApellidos() {
        return apellidos;
    }
    public String getDireccion() {
        return direccion;
    }
    public String getDni() {
        return dni;
    }
    public String getFechaNacimiento() {
        return fechaNacimiento;
    }
    public Long getId() {
        return id;
    }
    public String getNombre() {
        return nombre;
    }
    public String getTelefono() {
        return telefono;
    }
    public User getUsuario() {
        return usuario;
    }
    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
    public void setDni(String dni) {
        this.dni = dni;
    }
    public void setFechaNacimiento(String fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    public void setUsuario(User usuario) {
        this.usuario = usuario;
    }
}

