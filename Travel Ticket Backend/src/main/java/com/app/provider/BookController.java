package com.app.provider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService bookService;
    @CrossOrigin
    @PostMapping("/add/{trainId}")
    public Book addBook(@PathVariable Long trainId, @RequestBody Book book) {
        return bookService.addBook(trainId, book);
    }
    @CrossOrigin
    @GetMapping("/all")
    public List<Book> getAllBookings() {
        return bookService.getAllBookings();
    }
    @CrossOrigin
    @GetMapping("/getbooking/{id}")
    public Book getBook(@PathVariable Long id) {
        return bookService.getBook(id);
    }
}