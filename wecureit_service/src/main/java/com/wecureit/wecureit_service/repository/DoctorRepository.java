package com.wecureit.wecureit_service.repository;

import com.wecureit.wecureit_service.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer> {

    @Query("SELECT d FROM Doctor d WHERE d.user.id = :userId")
    Doctor findByUserId(@Param("userId") int userId);
}