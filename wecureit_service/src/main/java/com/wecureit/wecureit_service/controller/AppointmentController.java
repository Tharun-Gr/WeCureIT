package com.wecureit.wecureit_service.controller;

import com.wecureit.wecureit_service.dto.AppointmentDTO;
import com.wecureit.wecureit_service.model.*;
import com.wecureit.wecureit_service.service.AppointmentService;
import com.wecureit.wecureit_service.service.FacilityService;
import com.wecureit.wecureit_service.service.SpecializationService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.sql.Time;
import java.util.Arrays;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/appointment")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @Autowired
    private SpecializationService specializationService;

    @Autowired
    private FacilityService facilityService;

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping("/patient")
    public ResponseEntity<Patient> createAppointment(@RequestBody AppointmentDTO appointmentDTO) {
        System.out.println(appointmentDTO.getAppointmentDate());
        return ResponseEntity.ok().body(appointmentService.createPatientAppointment(
                modelMapper.map(appointmentDTO, Appointment.class)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<AppointmentDTO> getAppointment(@PathVariable("id") int id) {
        AppointmentDTO appointmentDTO = modelMapper.map(appointmentService.getAppointment(id),
                AppointmentDTO.class);
        return ResponseEntity.ok().body(appointmentDTO);
    }

    @GetMapping
    public ResponseEntity<List<AppointmentDTO>> getAppointments() {
        List<AppointmentDTO> appointmentDTOs = Arrays.asList(modelMapper.map(appointmentService.getAppointments(),
                AppointmentDTO[].class));
        return ResponseEntity.ok().body(appointmentDTOs);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAppointment(@PathVariable("id") int id) {
        appointmentService.deleteAppointment(id);
        return ResponseEntity.ok().body("Deleted id: "+id);
    }

    @PutMapping("/patient")
    public ResponseEntity<Patient> updatePatientAppointment(@RequestBody AppointmentDTO appointmentDTO) {
        return ResponseEntity.ok().body(appointmentService.updateAppointment(
                modelMapper.map(appointmentDTO, Appointment.class)));
    }

    @GetMapping("/facility-spec-date-time/{facillity_id}/{specilization_id}/{date}/{time}")
    public ResponseEntity<List<Doctor>> getDoctorsByFacilitySpecDateTime(
            @PathVariable("facillity_id") int facillityId,
            @PathVariable("specilization_id") int specilizationId,
            @PathVariable("date") Date date,
            @PathVariable("time") Time time) {
        return ResponseEntity.ok().body(appointmentService.getDoctorsByFacilitySpecDateTime(
                facillityId, specilizationId, date, time));
    }

    @GetMapping("/specialization/facilities/{specialization_id}")
    public ResponseEntity<List<Facility>> getFacilitiesInSpecialization(
            @PathVariable("specialization_id") int specializationId) {
        return ResponseEntity.ok().body(specializationService.findFacilitiesBySpecializationId(specializationId));
    }

    @GetMapping("/facilities-in-doctor-date-time/{doctor_id}/{date}/{time}")

    public ResponseEntity<List<Facility>> getFacilitiesByDoctorsDateAndTime(
            @PathVariable("doctor_id") int doctorId,
            @PathVariable("date") Date date,
            @PathVariable("time") Time time) {
        return ResponseEntity.ok().body(appointmentService.getFacilitiesByDoctorsDateAndTime(
                doctorId, date, time));
    }

    @GetMapping("/specialization-in-facility/{facility_id}")
    public ResponseEntity<List<Specialization>> getSpecializationsByFacilityId(
            @PathVariable("facility_id") int facilityId) {
        return ResponseEntity.ok().body(facilityService.getSpecializationsByFacilityId(facilityId));
    }
}
