package com.app.user;



import org.springframework.data.repository.CrudRepository;
import java.util.Optional;

public interface LoginRepository extends CrudRepository<Login, Long> {
    Optional<Login> findByEmail(String email);
}
