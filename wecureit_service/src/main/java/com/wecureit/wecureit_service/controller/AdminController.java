package com.wecureit.wecureit_service.controller;

import com.wecureit.wecureit_service.model.Admin;
import com.wecureit.wecureit_service.model.Signup;
import com.wecureit.wecureit_service.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping
    public ResponseEntity<Admin> createAdmin(@RequestBody Signup signup) {
        return ResponseEntity.ok().body(adminService.createAdmin(signup));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAdmin(@PathVariable("id") int id) {
        adminService.deleteAdmin(id);
        return ResponseEntity.ok().body("Deleted admin id: "+id);
    }

    @PutMapping
    public ResponseEntity<Admin> updateAdmin(@RequestBody Admin admin) {
        return ResponseEntity.ok().body(adminService.updateAdmin(admin));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> getAdmin(@PathVariable("id") int id) {
        return ResponseEntity.ok().body(adminService.getAdmin(id));
    }
}
