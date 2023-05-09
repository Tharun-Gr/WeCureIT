package com.wecureit.wecureit_service.controller;

import com.wecureit.wecureit_service.dto.SignInDTO;
import com.wecureit.wecureit_service.model.Admin;
import com.wecureit.wecureit_service.model.Doctor;
import com.wecureit.wecureit_service.model.Patient;
import com.wecureit.wecureit_service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signin/patient")
    public ResponseEntity<Patient> signinPatient(@RequestBody SignInDTO signInDTO) {
        return ResponseEntity.ok().body(userService.signinPatient(signInDTO));
    }

    @PostMapping("/signin/doctor")
    public ResponseEntity<Doctor> signinDoctor(@RequestBody SignInDTO signInDTO) {
        return ResponseEntity.ok().body(userService.signinDoctor(signInDTO));
    }

    @PostMapping("/signin/admin")
    public ResponseEntity<Admin> signinAdmin(@RequestBody SignInDTO signInDTO) {
        return ResponseEntity.ok().body(userService.signinAdmin(signInDTO));
    }
}
