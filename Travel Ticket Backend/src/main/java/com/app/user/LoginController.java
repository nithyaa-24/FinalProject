package com.app.user;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.user.Login;

import java.util.Optional;

@RestController
@RequestMapping("/api/logins")
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {

    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping
    public ResponseEntity<Iterable<Login>> getAllLogins() {
        return new ResponseEntity<>(loginService.findAllLogins(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Login> getLoginById(@PathVariable Long id) {
        Optional<Login> login = loginService.findLoginById(id);
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
    public ResponseEntity<Login> createLogin(@RequestBody Login login) {
        return new ResponseEntity<>(loginService.saveLogin(login), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Login> updateLogin(@PathVariable Long id, @RequestBody Login login) {
        Optional<Login> existingLogin = loginService.findLoginById(id);
        if (existingLogin.isPresent()) {
            login.setId(id);
            return new ResponseEntity<>(loginService.saveLogin(login), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLogin(@PathVariable Long id) {
        Optional<Login> existingLogin = loginService.findLoginById(id);
        if (existingLogin.isPresent()) {
            loginService.deleteLogin(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
        @PostMapping("/login")
        public ResponseEntity<Login> Login(@RequestBody Login login) {
        	  Optional<Login> loginResponse = loginService.findByEmail(login.getEmail());
            if (loginResponse.isPresent() && loginResponse.get().getPassword().equals(login.getPassword())) {
                return new ResponseEntity<>(login, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(login,HttpStatus.UNAUTHORIZED);
            }
        
    }
}
