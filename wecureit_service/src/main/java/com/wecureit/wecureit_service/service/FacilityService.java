package com.wecureit.wecureit_service.service;

import com.wecureit.wecureit_service.model.Facility;
import com.wecureit.wecureit_service.model.Specialization;
import com.wecureit.wecureit_service.repository.FacilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacilityService {

    @Autowired
    private FacilityRepository facilityRepository;

    public Facility createFacility(Facility facility) {
        return facilityRepository.save(facility);
    }

    public Facility getFacility(int id) {
        return facilityRepository.findById(id).orElse(null);
    }

    public List<Facility> getFacilities() {
        return facilityRepository.findAll();
    }

    public void deleteFacility(int id) {
        facilityRepository.deleteById(id);
    }

    public Facility updateFacility(Facility facility) {
        return facilityRepository.save(facility);
    }

    public List<Specialization> getSpecializationsByFacilityId(int facilityId) {
        return facilityRepository.findSpecializationsByFacilityId(facilityId);
    }
}
