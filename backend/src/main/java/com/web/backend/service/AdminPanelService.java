package com.web.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.backend.repository.ReservaRepository;
import com.web.backend.repository.UserRepository;

@Service
public class AdminPanelService {
    @Autowired
    private ReservaRepository reservaRepository;

    @Autowired
    private UserRepository usuarioRepository;

    public Double getTotalIngresos() {
        // Sumar los valores de 'total_precio' de todas las reservas
        return reservaRepository.sumTotalReservas();
    }

    public String getTotalReservas(){
        return reservaRepository.numTotalReservas();
    }

    public String getTotalUsuarios(){
        return usuarioRepository.numTotalUsuarios();
    }
}

