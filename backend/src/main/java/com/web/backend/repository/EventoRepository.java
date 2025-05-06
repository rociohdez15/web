package com.web.backend.repository;

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
}
