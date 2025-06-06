package com.web.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import com.web.backend.dto.GaleriaDto;
import com.web.backend.model.Galeria;
import com.web.backend.repository.GaleriaRepository;

@Service
public class GaleriaService {

    @Autowired
    private GaleriaRepository repo;

    public Page<GaleriaDto> obtenerPaginadas(Pageable pageable) {
        return repo.findAll(pageable)
                .map(img -> {
                    GaleriaDto dto = new GaleriaDto();
                    dto.setImagen(img.getImagen());
                    dto.setTitulo(img.getTitulo());
                    dto.setFecha(img.getFecha() != null ? img.getFecha().toString() : null);
                    dto.setUbicacion(img.getUbicacion());
                    dto.setMapa(img.getMapa());
                    return dto;
                });
    }

    public List<Galeria> obtenerGaleria() {
        return repo.findAll();  
    }
}
