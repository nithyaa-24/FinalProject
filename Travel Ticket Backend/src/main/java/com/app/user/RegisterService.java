package com.app.user;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepository userRepository;

    public List<Register> getAllUsers() {
        List<Register> allUsers = new ArrayList<>();
        userRepository.findAll().forEach(allUsers::add);
        return allUsers;
    }

    public Optional<Register> getUser(String email) {
        return userRepository.findById(email);
    }

    public Register addUser(Register user) {
        try {
            System.out.println(user.getFullname());
            userRepository.save(user);
        } catch (Exception e) {
            System.out.println("Exception");
            e.printStackTrace();
        }
        return userRepository.save(user);
    }

    public void deleteUser(String email) {
        userRepository.deleteById(email);
    }

    public void updateUser(Register updatedUser, String email) {
        userRepository.save(updatedUser);
    }
    public Register findByEmail(String email) {
    	return userRepository.findByEmail(email);
    }
}