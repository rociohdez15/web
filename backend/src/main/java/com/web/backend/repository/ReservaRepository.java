package com.web.backend.repository;

import java.time.LocalDate;
import java.util.List;
import java.math.BigDecimal;
import java.sql.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.web.backend.model.Reserva;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Long> {
        @Query("SELECT SUM(r.total_precio) FROM Reserva r")
            Double sumTotalReservas();

        @Query("SELECT COUNT(*) FROM Reserva WHERE estado = 'confirmada'")
            String numTotalReservas();

            @Query(value = """
                SELECT SUM(r.total_precio)
                FROM reservas r
                WHERE r.fecha_pago BETWEEN :inicioSemana AND :finSemana
            """, nativeQuery = true)
            BigDecimal obtenerIngresosDeSemana(
                @Param("inicioSemana") Date inicioSemanaSql,
                @Param("finSemana") Date finSemanaSql
            );

            @Query(value = """
                SELECT COUNT(*)
                FROM reservas r
                WHERE r.fecha_pago BETWEEN :inicioSemana AND :finSemana
            """, nativeQuery = true)
            BigDecimal obtenerVentasDeSemana(
                @Param("inicioSemana") Date inicioSemanaSql,
                @Param("finSemana") Date finSemanaSql
            );

            @Query(value = """
            SELECT SUM(r.total_precio)
            FROM reservas r
            WHERE r.fecha_pago = :fechaDia
                    """, nativeQuery = true)
            BigDecimal obtenerIngresosDeDia(@Param("fechaDia") Date fechaDia);

            @Query(value = """
                        SELECT COUNT(*)
                        FROM reservas r
                        WHERE r.fecha_pago = :fechaDia
                    """, nativeQuery = true)
            BigDecimal obtenerVentasDeDia(@Param("fechaDia") Date fechaDia);

            @Query(value = """
                SELECT MONTH(r.fecha_pago) AS mes, COUNT(*) AS ventas
                FROM reservas r
                WHERE YEAR(r.fecha_pago) = YEAR(CURDATE())
                GROUP BY MONTH(r.fecha_pago)
                ORDER BY mes
            """, nativeQuery = true)
            List<Object[]> obtenerVentasPorMesDelAnioActual();

            @Query(value = """
                SELECT SUM(r.total_precio)
                FROM reservas r
                WHERE MONTH(r.fecha_pago) IN (1, 2, 3, 4)
                AND YEAR(r.fecha_pago) = :anio
            """, nativeQuery = true)
            BigDecimal obtenerIngresosPrimerTrimestre(@Param("anio") int anio);

            @Query(value = """
                SELECT SUM(r.total_precio)
                FROM reservas r
                WHERE MONTH(r.fecha_pago) IN (5, 6, 7, 8)
                AND YEAR(r.fecha_pago) = :anio
            """, nativeQuery = true)
            BigDecimal obtenerIngresosSegundoTrimestre(@Param("anio") int anio);

            @Query(value = """
                SELECT SUM(r.total_precio)
                FROM reservas r
                WHERE MONTH(r.fecha_pago) IN (9, 10, 11, 12)
                AND YEAR(r.fecha_pago) = :anio
            """, nativeQuery = true)
            BigDecimal obtenerIngresosTercerTrimestre(@Param("anio") int anio);
}
