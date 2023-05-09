package com.wecureit.wecureit_service.repository;

import com.wecureit.wecureit_service.model.Doctor;
import com.wecureit.wecureit_service.model.WorkSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

public interface WorkScheduleRepository extends JpaRepository<WorkSchedule, Integer> {
//    @Query("SELECT ws.doctor FROM WorkSchedule ws WHERE ws.facility.id = :facilityId AND ws.workDate = :date AND :time BETWEEN ws.workStartTime AND ws.workEndTime")
    @Query("SELECT DISTINCT d FROM Doctor d JOIN d.doctorWorkSchedules s WHERE s.facility.id = :facilityId AND s.workDate = :date AND :time BETWEEN s.workStartTime AND s.workEndTime AND d.specialization.id = :specializationId")
    List<Doctor> findDoctorsByFacilityIdAndDateTime(@Param("facilityId") int facilityId, @Param("date") Date date, @Param("time") Time time, @Param("specializationId") int specializationId);
}
