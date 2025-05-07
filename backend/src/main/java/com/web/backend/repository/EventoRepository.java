package com.web.backend.repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.web.backend.model.Evento;
import com.web.backend.model.User;

@Repository
public interface EventoRepository extends JpaRepository<Evento, Long>{
    Optional<Evento> findById(Long id);
    List<Evento> findByNombre(String nombre);
       // Verifica si ya existe un evento con mismo nombre, fecha y hora
    Optional<Evento> findByNombreAndFechaAndHora(String nombre, LocalDate fecha, LocalTime hora);

    // Verifica si ya existe un evento (cualquiera) en esa fecha y hora
    Optional<Evento> findByFechaAndHora(LocalDate fecha, LocalTime hora);
}
