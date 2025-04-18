package com.web.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.web.backend.model.Evento;

@Repository
public interface EventoRepository extends JpaRepository<Evento, Long>{

}
