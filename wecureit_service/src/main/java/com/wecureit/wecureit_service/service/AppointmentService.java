package com.wecureit.wecureit_service.service;

import com.wecureit.wecureit_service.model.Appointment;
import com.wecureit.wecureit_service.model.Doctor;
import com.wecureit.wecureit_service.model.Facility;
import com.wecureit.wecureit_service.model.Patient;
import com.wecureit.wecureit_service.repository.AppointmentRepository;
import com.wecureit.wecureit_service.repository.WorkScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private PatientService patientService;

    @Autowired
    private WorkScheduleRepository workScheduleRepository;

    public Patient createPatientAppointment(Appointment appointment) {
        System.out.println("********** : "+appointment.getFacility().getId());
        appointmentRepository.save(appointment);
        return patientService.getPatient(appointment.getPatient().getId());
    }

    public Appointment getAppointment(int id) {
        return appointmentRepository.findById(id).orElse(null);
    }

    public List<Appointment> getAppointments() {
        return appointmentRepository.findAll();
    }

    public void deleteAppointment(int id) {
        appointmentRepository.deleteById(id);
    }

    public Patient updateAppointment(Appointment appointment) {
        appointmentRepository.save(appointment);
        return patientService.getPatient(appointment.getPatient().getId());
    }

    public List<Doctor> getDoctorsByFacilitySpecDateTime(
            int facilityId, int specializationId, Date date, Time time) {
        return workScheduleRepository.findDoctorsByFacilityIdAndDateTime(facilityId, date, time, specializationId);
    }

    public List<Facility> getFacilitiesByDoctorsDateAndTime(
            int doctorId, Date date, Time time) {
        return workScheduleRepository.findFacilitiesByDoctorIdAndDateTime(doctorId, date, time);
    }
}
