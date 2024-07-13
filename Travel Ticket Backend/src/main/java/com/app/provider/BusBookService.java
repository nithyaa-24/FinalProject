package com.app.provider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BusBookService {

    @Autowired
    private BusBookRepository busBookRepository;

    @Autowired
    private BusRepository busRepository;

    public BusBook addBusBook(Long busId, BusBook busBook) {
        Optional<Bus> busOptional = busRepository.findById(busId);
        if (busOptional.isPresent()) {
            busBook.setBus(busOptional.get());
            return busBookRepository.save(busBook);
        } else {
            throw new RuntimeException("Bus not found with id: " + busId);
        }
    }

    public List<BusBook> getAllBusBookings() {
        return busBookRepository.findAll();
    }

    public BusBook getBook(Long id) {
        return busBookRepository.findById(id).orElseThrow(() -> new RuntimeException("Booking not found with id: " + id));
    }
}