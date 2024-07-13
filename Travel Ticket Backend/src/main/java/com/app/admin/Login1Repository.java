package com.app.admin;

import org.springframework.data.repository.CrudRepository;
import java.util.Optional;

public interface Login1Repository extends CrudRepository<Login1, Long> {
    Optional<Login1> findByEmail(String email);
}

