package com.app.admin;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class Login1Service {
	@Autowired

    private Login1Repository loginRepository;
	
    
    //@Autowired
    //public LoginService(LoginRepository loginRepository) {
       // this.loginRepository = loginRepository;
   // }

    public Optional<Login1> findByEmail(String email) {
        return loginRepository.findByEmail(email);
    }

    public Login1 saveLogin(Login1 login) {
        return loginRepository.save(login);
    }

    public void deleteLogin(Long id) {
        loginRepository.deleteById(id);
    }

    public Optional<Login1> findLoginById(Long id) {
        return loginRepository.findById(id);
    }

    public Iterable<Login1> findAllLogins() {
        return loginRepository.findAll();
    }
}

