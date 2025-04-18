package com.web.backend.model;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "reservas")
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double total_precio;

    private Date fecha_pago;

    private String estado;

    public Long getId() {
        return id;
    }
    public double getTotal_precio() {
        return total_precio;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public void setTotal_precio(double total_precio) {
        this.total_precio = total_precio;
    }

    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }
    
    public Date getFechaPago() {
        return fecha_pago;
    }
    public void setFechaPAgo(Date fecha_pago) {
        this.fecha_pago = fecha_pago;
    }
}
