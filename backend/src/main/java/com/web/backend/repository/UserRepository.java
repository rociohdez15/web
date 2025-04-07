package com.web.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.web.backend.model.User;

/* Función: Define la interfaz de acceso a la base de datos (a través de JpaRepository).

Contiene métodos como findByEmail() para buscar un usuario por su correo electrónico.

 */


@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    User findByEmail(String email);
}

