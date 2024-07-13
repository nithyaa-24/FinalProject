package com.app.user;



import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.stereotype.Service;

import com.app.user.Login;
import com.app.user.LoginRepository;

import java.util.Optional;

@Service
public class LoginService {
	@Autowired

    private LoginRepository loginRepository;
	
    
    //@Autowired
    //public LoginService(LoginRepository loginRepository) {
       // this.loginRepository = loginRepository;
   // }

    public Optional<Login> findByEmail(String email) {
        return loginRepository.findByEmail(email);
    }

    public Login saveLogin(Login login) {
        return loginRepository.save(login);
    }

    public void deleteLogin(Long id) {
        loginRepository.deleteById(id);
    }

    public Optional<Login> findLoginById(Long id) {
        return loginRepository.findById(id);
    }

    public Iterable<Login> findAllLogins() {
        return loginRepository.findAll();
    }
}
