package com.web.backend.repository;

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
}
