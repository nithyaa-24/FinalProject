package com.app.provider;

//TrainService.java
import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrainService {

 @Autowired
 private TrainRepository trainRepository;
 
 @Autowired
 private BookRepository bookRepository;

 public Train addTrain(Train train) {
     return trainRepository.save(train);
 }

 public List<Train> searchTrains(String source, String destination, LocalDate arrivalDate, LocalDate departureDate) {
     return trainRepository.findBySourceAndDestinationAndArrivalDateAndDepartureDate(source, destination, arrivalDate, departureDate);
 }
 
 public void deleteTrain(Long id) {
     List<Book> books = bookRepository.findByTrainId(id);
     for (Book book : books) {
         bookRepository.delete(book);
     }
     trainRepository.deleteById(id);
 }
 
 public List<Train> getAllTrains() {
     return trainRepository.findAll();
 }
 
 public Train updateTrain(Long id, Train trainDetails) {
     Optional<Train> trainOptional = trainRepository.findById(id);
     if (trainOptional.isPresent()) {
         Train train = trainOptional.get();
         train.setTrainName(trainDetails.getTrainName());
         train.setSource(trainDetails.getSource());
         train.setDestination(trainDetails.getDestination());
         train.setArrivalDate(trainDetails.getArrivalDate());
         train.setDepartureDate(trainDetails.getDepartureDate());
         train.setTrainFare(trainDetails.getTrainFare());
         return trainRepository.save(train);
     } else {
    	 System.out.println("Train not found with id: " + id);
         return null;
     }
 }
}

