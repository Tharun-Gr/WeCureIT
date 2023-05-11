package com.wecureit.wecureit_service.repository;

import com.wecureit.wecureit_service.model.Facility;
import com.wecureit.wecureit_service.model.Specialization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FacilityRepository  extends JpaRepository<Facility, Integer> {
    @Query("SELECT f.specializations FROM Facility f WHERE f.id = :facilityId")
    List<Specialization> findSpecializationsByFacilityId(@Param("facilityId") int facilityId);
}
