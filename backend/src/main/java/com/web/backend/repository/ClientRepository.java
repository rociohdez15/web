package com.web.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.web.backend.model.Client;



public interface ClientRepository extends JpaRepository<Client, Long> {
}

