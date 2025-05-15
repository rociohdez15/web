package com.web.backend.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.util.List;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import org.springframework.util.StringUtils;

import com.web.backend.dto.GaleriaDto;
import com.web.backend.model.Galeria;
import com.web.backend.repository.GaleriaRepository;
import com.web.backend.service.GaleriaService;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/api/imagenes")
public class GaleriaController {

    @Autowired
    private GaleriaService imagenService;

    @Autowired
    private GaleriaRepository galeriaRepository;

    private static final String IMAGE_DIR = "src/main/resources/static/images/";

    @GetMapping
    public Page<GaleriaDto> obtenerImagenes(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "4") int size) {
        Pageable pageable = PageRequest.of(page, size);
        return imagenService.obtenerPaginadas(pageable);
    }

    @GetMapping("/obtener-galeria")
    public List<Galeria> obtenerGaleria() {
        return imagenService.obtenerGaleria();
    }

    @PostMapping(value = "/api/imagenes", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
public ResponseEntity<?> guardarImagen(
        @RequestParam("imagen") MultipartFile file,
        @RequestParam("titulo") String titulo,
        @RequestParam("fecha") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fecha,
        @RequestParam("ubicacion") String ubicacion,
        @RequestParam("mapa") String mapa) {
        try {
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            Path uploadPath = Paths.get(IMAGE_DIR);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            Path filePath = uploadPath.resolve(fileName);
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            Galeria imagen = new Galeria(fileName, titulo, fecha, ubicacion, mapa);
            Galeria guardada = galeriaRepository.save(imagen);

            return ResponseEntity.ok(guardada);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Error al guardar imagen: " + e.getMessage());
        }
    }
}
