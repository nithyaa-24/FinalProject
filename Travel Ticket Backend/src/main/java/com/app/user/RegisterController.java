package com.app.user;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RegisterController {

    @Autowired
    private RegisterService userService;

    @RequestMapping("/testuser")
    public String testUser() {
        return "<h2>Welcome to the User Controller!</h2>";
    }

    @CrossOrigin
    @RequestMapping("/users")
    public java.util.List<Register> getAllUsers() {
        return userService.getAllUsers();
    }

    @CrossOrigin
    @RequestMapping("/users/{email}")
    public Optional<Register> getUser(@PathVariable String email) {
        return userService.getUser(email);
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.POST, value = "/add-user")
    public ResponseEntity<Register> addUser(@RequestBody Register newUser) {
        return ResponseEntity.ok(userService.addUser(newUser));
    }
    @CrossOrigin
    @RequestMapping(method =RequestMethod.POST, value="/login")
    public ResponseEntity<?> loginUser(@RequestBody Register user) {
        Register foundUser = userService.findByEmail(user.getEmail());
        if (foundUser != null && foundUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok(foundUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.DELETE, value = "/delete-user/{email}")
    public void deleteUser(@PathVariable String email) {
        userService.deleteUser(email);
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.PUT, value = "/update-user/{email}")
    public void updateUser(@RequestBody Register updatedUser, @PathVariable String email) {
        userService.updateUser(updatedUser, email);
    }
}