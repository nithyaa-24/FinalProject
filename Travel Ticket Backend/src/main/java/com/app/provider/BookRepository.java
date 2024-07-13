// BookRepository.java
package com.app.provider;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByTrainId(Long trainId);
}
