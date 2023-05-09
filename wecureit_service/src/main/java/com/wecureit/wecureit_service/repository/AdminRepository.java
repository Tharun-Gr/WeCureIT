package com.wecureit.wecureit_service.repository;

import com.wecureit.wecureit_service.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

    @Query("SELECT a FROM Admin a WHERE a.user.id = :userId")
    Admin findByUserId(@Param("userId") int userId);
}
