package com.web.backend.repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.web.backend.model.Contacto;

@Repository
public interface ContactoRepository extends JpaRepository<Contacto, Long>{
    List<Contacto> findByIdEquals(Long id);

    List<Contacto> findByNombreContainingIgnoreCaseOrEmailContainingIgnoreCase(String nombre, String email);

}
