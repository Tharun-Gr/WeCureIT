package com.wecureit.wecureit_service.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.wecureit.wecureit_service.model.Doctor;
import com.wecureit.wecureit_service.model.Facility;
import com.wecureit.wecureit_service.model.Patient;
import com.wecureit.wecureit_service.model.Room;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.sql.Time;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentDTO {
    private int id;
    private Date appointmentDate;
    private Time appointmentTime;
    private int appointmentDuration;

    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"}, allowSetters = true)
    private Patient patient;

    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"}, allowSetters = true)
    private Doctor doctor;

    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"}, allowSetters = true)
    private Facility facility;

    @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"}, allowSetters = true)
    private Room room;
}
