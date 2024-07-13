package com.app.provider;

//BusController.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/buses")
public class BusController {

    @Autowired
    private BusService busService;

    @CrossOrigin
    @PostMapping("/add")
    public Bus addBus(@RequestBody Bus bus) {
        return busService.addBus(bus);
    }

    @CrossOrigin
    @PostMapping("/search")
    public List<Bus> searchBuses(@RequestBody BusSearchRequest request) {
        return busService.searchBuses(request.getSource(), request.getDestination(), request.getArrivalDate(), request.getDepartureDate());
    }

    @CrossOrigin
    @DeleteMapping("/delete/{id}")
    public void deleteBus(@PathVariable Long id) {
        busService.deleteBus(id);
    }

    @CrossOrigin
    @GetMapping("/all")
    public List<Bus> getAllBuses() {
        return busService.getAllBuses();
    }

    @CrossOrigin
    @PutMapping("/update/{id}")
    public Bus updateBus(@PathVariable Long id, @RequestBody Bus busDetails) {
        Bus updatedBus = busService.updateBus(id, busDetails);
        if (updatedBus == null) {
            System.out.println("Bus not found with id: " + id);
        }
        return updatedBus;
    }
}
