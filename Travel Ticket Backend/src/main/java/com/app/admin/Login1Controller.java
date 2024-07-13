package com.app.admin;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/loginAdmin")
@CrossOrigin(origins = "http://localhost:4200")
public class Login1Controller {

    private final Login1Service login1Service;

    @Autowired
    public Login1Controller(Login1Service login1Service) {
        this.login1Service = login1Service;
    }

    @GetMapping
    public ResponseEntity<Iterable<Login1>> getAllLogins() {
        return new ResponseEntity<>(login1Service.findAllLogins(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Login1> getLoginById(@PathVariable Long id) {
        Optional<Login1> login = login1Service.findLoginById(id);
        return login.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                    .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    //@GetMapping("/email/{email}")
    //public ResponseEntity<Login> getLoginByEmail(@PathVariable String email) {
     //   Optional<Login> login = loginService.findByEmail(email);
      //  return login.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
           //         .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
   // }

    @PostMapping
    public ResponseEntity<Login1> createLogin(@RequestBody Login1 login) {
        return new ResponseEntity<>(login1Service.saveLogin(login), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Login1> updateLogin(@PathVariable Long id, @RequestBody Login1 login) {
        Optional<Login1> existingLogin = login1Service.findLoginById(id);
        if (existingLogin.isPresent()) {
            login.setId(id);
            return new ResponseEntity<>(login1Service.saveLogin(login), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLogin(@PathVariable Long id) {
        Optional<Login1> existingLogin = login1Service.findLoginById(id);
        if (existingLogin.isPresent()) {
            login1Service.deleteLogin(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
        @PostMapping("/loginAdmin")
        public ResponseEntity<Login1> Login(@RequestBody Login1 login) {
        	  Optional<Login1> loginResponse = login1Service.findByEmail(login.getEmail());
            if (loginResponse.isPresent() && loginResponse.get().getPassword().equals(login.getPassword())) {
                return new ResponseEntity<>(login, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(login,HttpStatus.UNAUTHORIZED);
            }
        
    }
}

