package com.app.provider;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class BusService {

    @Autowired
    private BusRepository busRepository;
    
    @Autowired
    private BusBookRepository busBookRepository;

    public Bus addBus(Bus bus) {
        return busRepository.save(bus);
    }

    public List<Bus> searchBuses(String source, String destination, LocalDate arrivalDate, LocalDate departureDate) {
        return busRepository.findBySourceAndDestinationAndArrivalDateAndDepartureDate(source, destination, arrivalDate, departureDate);
    }

    public void deleteBus(Long id) {
    	List<BusBook> books = busBookRepository.findByBusId(id);
        for (BusBook book : books) {
            busBookRepository.delete(book);
        }
        busRepository.deleteById(id);
    }
    

    public List<Bus> getAllBuses() {
        return busRepository.findAll();
    }

    public Bus updateBus(Long id, Bus busDetails) {
        Optional<Bus> optionalBus = busRepository.findById(id);
        if (optionalBus.isPresent()) {
            Bus existingBus = optionalBus.get();
            existingBus.setSource(busDetails.getSource());
            existingBus.setDestination(busDetails.getDestination());
            existingBus.setArrivalDate(busDetails.getArrivalDate());
            existingBus.setDepartureDate(busDetails.getDepartureDate());
            existingBus.setBusName(busDetails.getBusName());
            existingBus.setBusFare(busDetails.getBusFare());
            return busRepository.save(existingBus);
        } else {
        	System.out.println("Bus not found with id: " + id);
            return null;
        }
    }
}