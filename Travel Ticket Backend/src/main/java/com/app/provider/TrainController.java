package com.app.provider;

//TrainController.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/trains")
public class TrainController {

 @Autowired
 private TrainService trainService;
@CrossOrigin
 @PostMapping("/add")
 public Train addTrain(@RequestBody Train train) {
     return trainService.addTrain(train);
 }
@CrossOrigin
 @PostMapping("/search")
 public List<Train> searchTrains(@RequestBody TrainSearchRequest request) {
     return trainService.searchTrains(request.getSource(), request.getDestination(), request.getArrivalDate(), request.getDepartureDate());
 }
@CrossOrigin
@DeleteMapping("/delete/{id}")
public void deleteTrain(@PathVariable Long id) {
    trainService.deleteTrain(id);
}

@CrossOrigin
@GetMapping("/all")
public List<Train> getAllTrains() {
    return trainService.getAllTrains();
}
@CrossOrigin
@PutMapping("/update/{id}")
public Train updateTrain(@PathVariable Long id, @RequestBody Train trainDetails) {
    Train updatedTrain = trainService.updateTrain(id, trainDetails);
    if (updatedTrain == null) {
        System.out.println("Train not found with id: " + id);
    }
    return updatedTrain;
}


}


