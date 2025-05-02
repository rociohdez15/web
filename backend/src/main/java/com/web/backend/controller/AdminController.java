package com.web.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.backend.dto.EditarEmailDto;
import com.web.backend.model.Evento;
import com.web.backend.model.User;
import com.web.backend.repository.UserRepository;
import com.web.backend.service.AdminsService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/rol-admin")
public class AdminController {

    @Autowired
    private AdminsService adminsService;

    @Autowired
    private UserRepository usuarioRepository;

    @GetMapping("/obtener-admins")
    public List<User> obtenerAdmins() {
        return adminsService.obtenerAdmins();
    }

    @GetMapping("/buscar")
    public ResponseEntity<?> buscarUsuario(@RequestParam String input) {
        Optional<User> usuario = adminsService.buscarPorIdOEmail(input);

        if (usuario.isPresent()) {
            return ResponseEntity.ok(usuario.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontraron resultados.");
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<?> eliminarAdmin(@PathVariable Long id) {
        try {
            usuarioRepository.deleteById(id);
            return ResponseEntity.ok().body("Administrador eliminado correctamente");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al eliminar el administrador");
        }
    }
    @PutMapping("/editar/{id}")
    public ResponseEntity<EditarEmailDto> editarEmail(
            @PathVariable Long id,
            @RequestParam String email) {
        
        // Buscar usuario por ID en la base de datos
        Optional<User> usuarioOpt = usuarioRepository.findById(id);
        
        if (usuarioOpt.isPresent()) {
            // Obtener el usuario y actualizar el email
            User usuario = usuarioOpt.get();
            usuario.setEmail(email);
            
            // Guardar el usuario actualizado en la base de datos
            usuarioRepository.save(usuario);
            
            // Crear DTO de respuesta
            EditarEmailDto dto = new EditarEmailDto();
            dto.setEmail(usuario.getEmail());
            
            // Retornar el DTO actualizado
            return ResponseEntity.ok(dto);
        } else {
            // Retornar error si el usuario no se encuentra
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
    

}
