package com.app.provider;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface BusRepository extends JpaRepository<Bus, Long> {
    List<Bus> findBySourceAndDestinationAndArrivalDateAndDepartureDate(String source, String destination, LocalDate arrivalDate, LocalDate departureDate);
}