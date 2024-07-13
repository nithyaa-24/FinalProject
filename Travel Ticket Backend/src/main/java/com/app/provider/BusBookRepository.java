package com.app.provider;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusBookRepository extends JpaRepository<BusBook, Long> {
	List<BusBook> findByBusId(Long busId);
}