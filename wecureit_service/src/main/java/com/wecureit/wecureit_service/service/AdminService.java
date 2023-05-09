package com.wecureit.wecureit_service.service;

import com.wecureit.wecureit_service.model.Admin;
import com.wecureit.wecureit_service.model.Signup;
import com.wecureit.wecureit_service.model.User;
import com.wecureit.wecureit_service.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private UserService userService;

    private void insertValuesToAdmin(Admin admin, Signup signup, User user) {
        admin.setFirstName(signup.getFirstName());
        admin.setLastName(signup.getLastName());
        admin.setPhoneNumber(signup.getPhoneNumber());
        admin.setAddress(signup.getAddress());
        admin.setCity(signup.getCity());
        admin.setZipCode(signup.getZipCode());
        admin.setUser(user);
    }
    public Admin createAdmin(Signup signup) {
        User user = userService.createUser(signup, "admin");
        Admin admin = new Admin();
        insertValuesToAdmin(admin, signup, user);
        return adminRepository.save(admin);
    }

    public void deleteAdmin(int id) {
        Admin admin = adminRepository.findById(id).orElse(null);
        if (admin != null) {
            adminRepository.deleteById(id);
            userService.deleteUser(admin.getUser().getId());
        }
    }

    public Admin updateAdmin(Admin admin) {
        User user = userService.updateUser(admin.getUser());
        admin.setUser(user);
        return adminRepository.save(admin);
    }

    public Admin getAdmin(int id) {
        return adminRepository.findById(id).orElse(null);
    }
}
