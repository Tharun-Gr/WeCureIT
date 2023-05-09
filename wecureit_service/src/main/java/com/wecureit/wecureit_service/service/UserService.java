package com.wecureit.wecureit_service.service;

import com.wecureit.wecureit_service.dto.SignInDTO;
import com.wecureit.wecureit_service.model.*;
import com.wecureit.wecureit_service.repository.AdminRepository;
import com.wecureit.wecureit_service.repository.DoctorRepository;
import com.wecureit.wecureit_service.repository.PatientRepository;
import com.wecureit.wecureit_service.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PatientRepository patientRepository;

    @Autowired
    DoctorRepository doctorRepository;

    @Autowired
    AdminRepository adminRepository;

    public User createUser(Signup signup, String userType) {
        User user = new User();
        user.setEmail(signup.getEmail());
        user.setPassword(signup.getPassword());
        user.setUserType(userType);
        userRepository.save(user);
        return user;
    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

    public User updateUser(User user) {
        return userRepository.save(user);
    }

    public Patient signinPatient(SignInDTO signInDTO) {
        User user = userRepository.findByEmailAndPassword(signInDTO.getEmail(), signInDTO.getPassword());
        return patientRepository.findByUserId(user.getId());
    }

    public Doctor signinDoctor(SignInDTO signInDTO) {
        User user = userRepository.findByEmailAndPassword(signInDTO.getEmail(), signInDTO.getPassword());
        return doctorRepository.findByUserId(user.getId());
    }

    public Admin signinAdmin(SignInDTO signInDTO) {
        User user = userRepository.findByEmailAndPassword(signInDTO.getEmail(), signInDTO.getPassword());
        return adminRepository.findByUserId(user.getId());
    }
}
