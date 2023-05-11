package com.wecureit.wecureit_service.repository;

import com.wecureit.wecureit_service.model.Facility;
import com.wecureit.wecureit_service.model.Specialization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SpecializationRepository extends JpaRepository<Specialization, Integer> {

    @Query("SELECT s.facilities FROM Specialization s WHERE s.id = ?1")
    List<Facility> findFacilitiesBySpecializationId(int specializationId);
}
