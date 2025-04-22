package com.web.backend.service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.temporal.TemporalAdjusters;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.math.BigDecimal;
import java.text.DateFormatSymbols;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import com.web.backend.dto.EventoRequestDto;
import com.web.backend.dto.RegisterRequestDto;
import com.web.backend.model.Contacto;
import com.web.backend.model.Evento;
import com.web.backend.model.Proyecto;
import com.web.backend.model.User;
import com.web.backend.repository.ContactoRepository;
import com.web.backend.repository.EventoRepository;
import com.web.backend.repository.ProyectoRepository;
import com.web.backend.repository.ReservaRepository;
import com.web.backend.repository.UserRepository;

import jakarta.mail.MessagingException;
import jakarta.transaction.Transactional;

@Service
public class AdminPanelService {
    @Autowired
    private ReservaRepository reservaRepository;

    @Autowired
    private UserRepository usuarioRepository;

    @Autowired
    private EventoRepository eventoRepository;

    @Autowired
    private ProyectoRepository proyectoRepository;

    @Autowired
    private ContactoRepository contactoRepository;

    public Double getTotalIngresos() {
        // Sumar los valores de 'total_precio' de todas las reservas
        return reservaRepository.sumTotalReservas();
    }

    public String getTotalReservas() {
        return reservaRepository.numTotalReservas();
    }

    public String getTotalUsuarios() {
        return usuarioRepository.numTotalUsuarios();
    }

    public BigDecimal calcularIngresosSemanaActual() {
        LocalDate hoy = LocalDate.now();
        // Lunes de esta semana
        LocalDate inicioSemana = hoy.with(DayOfWeek.MONDAY);
        // Domingo de esta semana
        LocalDate finSemana = hoy.with(DayOfWeek.SUNDAY);

        // Convertir LocalDate a java.sql.Date
        java.sql.Date inicioSemanaSql = java.sql.Date.valueOf(inicioSemana);
        java.sql.Date finSemanaSql = java.sql.Date.valueOf(finSemana);

        return reservaRepository.obtenerIngresosDeSemana(inicioSemanaSql, finSemanaSql);
    }

    public BigDecimal calcularVentasSemanaActual() {
        LocalDate hoy = LocalDate.now();
        // Lunes de esta semana
        LocalDate inicioSemana = hoy.with(DayOfWeek.MONDAY);
        // Domingo de esta semana
        LocalDate finSemana = hoy.with(DayOfWeek.SUNDAY);

        // Convertir LocalDate a java.sql.Date
        java.sql.Date inicioSemanaSql = java.sql.Date.valueOf(inicioSemana);
        java.sql.Date finSemanaSql = java.sql.Date.valueOf(finSemana);

        return reservaRepository.obtenerVentasDeSemana(inicioSemanaSql, finSemanaSql);
    }

    public Map<String, Object> obtenerIngresosYVentasPorDiaDeSemana() {
        LocalDate hoy = LocalDate.now();
        // Lunes de esta semana
        LocalDate inicioSemana = hoy.with(DayOfWeek.MONDAY);
        // Domingo de esta semana
        LocalDate finSemana = hoy.with(DayOfWeek.SUNDAY);

        Map<String, Object> data = new HashMap<>();
        List<Double> ingresosPorDia = new ArrayList<>();
        List<String> ventasPorDia = new ArrayList<>();

        // Iteramos sobre los días de la semana (de lunes a domingo)
        for (DayOfWeek day : DayOfWeek.values()) {
            // Calculamos la fecha del día correspondiente
            LocalDate fechaDia = inicioSemana.with(TemporalAdjusters.nextOrSame(day));

            // Convertimos la fecha a java.sql.Date
            java.sql.Date fechaDiaSql = java.sql.Date.valueOf(fechaDia);

            // Obtener ingresos y ventas de ese día
            BigDecimal ingresosDia = reservaRepository.obtenerIngresosDeDia(fechaDiaSql);
            BigDecimal ventasDia = reservaRepository.obtenerVentasDeDia(fechaDiaSql);

            // Añadimos a las listas
            ingresosPorDia.add(ingresosDia != null ? ingresosDia.doubleValue() : 0.0);
            ventasPorDia.add(ventasDia != null ? ventasDia.toString() : "0");
        }

        // Guardamos los resultados en el mapa
        data.put("ingresos", ingresosPorDia);
        data.put("ventas", ventasPorDia);
        return data;
    }

    public BigDecimal obtenerIngresosSemanaAnterior() {
        // Obtener la fecha de hoy
        LocalDate hoy = LocalDate.now();

        // Calcular el lunes de la semana anterior
        LocalDate inicioSemanaAnterior = hoy.minusWeeks(1).with(DayOfWeek.MONDAY);

        // Calcular el domingo de la semana anterior
        LocalDate finSemanaAnterior = hoy.minusWeeks(1).with(DayOfWeek.SUNDAY);

        // Convertir LocalDate a java.sql.Date
        java.sql.Date inicioSemanaSql = java.sql.Date.valueOf(inicioSemanaAnterior);
        java.sql.Date finSemanaSql = java.sql.Date.valueOf(finSemanaAnterior);

        // Llamar al repositorio para obtener los ingresos de la semana anterior
        return reservaRepository.obtenerIngresosDeSemana(inicioSemanaSql, finSemanaSql);
    }

    public Map<String, Integer> obtenerVentasPorMes() {
        List<Object[]> resultados = reservaRepository.obtenerVentasPorMesDelAnioActual();
        Map<String, Integer> ventasPorMes = new LinkedHashMap<>();
    
        // Inicializa todos los meses en 0
        DateFormatSymbols dfs = new DateFormatSymbols(new Locale("es", "ES"));
        String[] meses = dfs.getMonths();
    
        for (int i = 0; i < 12; i++) {
            ventasPorMes.put(meses[i], 0);
        }
    
        for (Object[] fila : resultados) {
            Integer mes = ((Number) fila[0]).intValue(); // 1-12
            Integer ventas = ((Number) fila[1]).intValue();
            ventasPorMes.put(meses[mes - 1], ventas); // mes - 1 porque el array empieza en 0
        }
    
        return ventasPorMes;
    }
    
    public BigDecimal calcularIngresosPrimerTrimestre() {
        int anioActual = LocalDate.now().getYear();
        return reservaRepository.obtenerIngresosPrimerTrimestre(anioActual);
    }
    
    public BigDecimal calcularIngresosSegundoTrimestre() {
        int anioActual = LocalDate.now().getYear();
        return reservaRepository.obtenerIngresosSegundoTrimestre(anioActual);
    }

    public BigDecimal calcularIngresosTercerTrimestre() {
        int anioActual = LocalDate.now().getYear();
        return reservaRepository.obtenerIngresosTercerTrimestre(anioActual);
    }
    
    @Transactional
    public String crearEvento(EventoRequestDto eventoRequestDto) throws MessagingException  {


        Evento evento = new Evento();
        evento.setNombre(eventoRequestDto.getNombre());
        evento.setFecha(eventoRequestDto.getFecha());
        evento.setHora(eventoRequestDto.getHora());

        eventoRepository.save(evento);
        return "Evento creado exitosamente";
    }

    public List<Evento> obtenerEventos() {
        return eventoRepository.findAll(); // Obtener todos los eventos
    }

    public List<Proyecto> obtenerProyectos() {
        return proyectoRepository.findAll(); // Obtener todos los proyectos
    }

    public List<Contacto> obtenerFormContacto() {
        return contactoRepository.findAll(); // Obtener todos los formularios de contactos
    }
}
