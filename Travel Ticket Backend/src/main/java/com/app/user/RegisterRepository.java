package com.app.user;
import java.util.Optional;



import org.springframework.data.repository.CrudRepository;

public interface RegisterRepository extends CrudRepository<Register, String> {

	Register findByEmail(String email);
}