package com.app.provider;

//TrainRepository.java

import java.time.LocalDate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainRepository extends JpaRepository<Train, Long> {
 List<Train> findBySourceAndDestinationAndArrivalDateAndDepartureDate(String source, String destination, LocalDate arrivalDate, LocalDate departureDate);
}

