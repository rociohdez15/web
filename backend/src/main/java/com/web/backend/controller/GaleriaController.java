package com.web.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.web.bind.annotation.*;

import com.web.backend.dto.GaleriaDto;
import com.web.backend.service.GaleriaService;

@RestController
@RequestMapping("/api/imagenes")
public class GaleriaController {

    @Autowired
    private GaleriaService imagenService;

    @GetMapping
    public Page<GaleriaDto> obtenerImagenes(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "4") int size
    ) {
        Pageable pageable = PageRequest.of(page, size);
        return imagenService.obtenerPaginadas(pageable);
    }
}
