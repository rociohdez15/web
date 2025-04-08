package com.web.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.web.backend.dto.RegisterRequestDto;
import com.web.backend.model.Client;
import com.web.backend.model.User;
import com.web.backend.repository.ClientRepository;
import com.web.backend.repository.UserRepository;

import jakarta.mail.MessagingException;




@Service
public class RegisterService {

    @Autowired
    private UserRepository usuarioRepository;
    
    @Autowired
    private ClientRepository clienteRepository;

    @Autowired
    private EmailService emailService; // Servicio de envío de correos

    @Autowired
    private BCryptPasswordEncoder passwordEncoder; // Para hashear las contraseñas

    @Transactional
    public String registrarUsuario(RegisterRequestDto registerRequestDto) throws MessagingException {
        // Validar si el email ya existe
        if (usuarioRepository.existsByEmail(registerRequestDto.getEmail())) {
            throw new IllegalArgumentException("El email ya está registrado.");
        }

        // Generar el hash de la contraseña
        String passwordHash = passwordEncoder.encode(registerRequestDto.getPassword());

        // Crear y guardar el usuario
        User usuario = new User();
        usuario.setEmail(registerRequestDto.getEmail());
        usuario.setPassword_hash(passwordHash);

        // Guardar el usuario en la base de datos
        usuarioRepository.save(usuario);

        // Crear el cliente y asociarlo con el usuario
        Client cliente = new Client();
        cliente.setNombre(registerRequestDto.getNombre());
        cliente.setApellidos(registerRequestDto.getApellidos());
        cliente.setDni(registerRequestDto.getDni());
        cliente.setDireccion(registerRequestDto.getDireccion());
        cliente.setTelefono(registerRequestDto.getTelefono());
        cliente.setFechaNacimiento(registerRequestDto.getFechaNacimiento());
        cliente.setUsuario(usuario);

        // Guardar el cliente
        clienteRepository.save(cliente);

        // Enviar el correo de bienvenida
        emailService.sendRegistrationEmail(registerRequestDto.getEmail());

        return "Usuario registrado con éxito.";
    }
}
