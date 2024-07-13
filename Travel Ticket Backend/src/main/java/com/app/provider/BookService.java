package com.app.provider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private TrainRepository trainRepository;

    public Book addBook(Long trainId, Book book) {
        Train train = trainRepository.findById(trainId)
                .orElseThrow(() -> new RuntimeException("Train not found"));
        book.setTrain(train);
        return bookRepository.save(book);
    }
    public Book getBook(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Train not found"));
        
        return(book);
    }


    public List<Book> getAllBookings() {
        return bookRepository.findAll();
    }
}