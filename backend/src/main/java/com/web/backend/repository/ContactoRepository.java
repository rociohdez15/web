package com.web.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.web.backend.model.Contacto;

@Repository
public interface ContactoRepository extends JpaRepository<Contacto, Long>{

}
