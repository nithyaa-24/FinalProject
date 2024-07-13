package com.app.provider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/bus-bookings")
public class BusBookController {

    @Autowired
    private BusBookService busBookService;

    @CrossOrigin
    @PostMapping("/add/{busId}")
    public BusBook addBusBooking(@PathVariable Long busId, @RequestBody BusBook busBooking) {
        return busBookService.addBusBook(busId, busBooking);
    }

    @CrossOrigin
    @GetMapping("/all")
    public List<BusBook> getAllBusBookings() {
        return busBookService.getAllBusBookings();
    }

    @CrossOrigin
    @GetMapping("/getBooking/{id}")
    public BusBook getBook(@PathVariable Long id) {
        return busBookService.getBook(id);
    }
}