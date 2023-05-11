import { useEffect, useState } from "react";
import FacilityBookingForm from "./FacilityBookingForm";
import { useNavigate, useParams } from "react-router-dom";
import { Patient } from "./interfaces";
import { DoctorBookingForm } from "./DoctorBookingForm";
import { SpecializationBookingForm } from "./SpecializationBookingForm";

const CreateAppointment = () => {
	const { patientId } = useParams();
  const navigate = useNavigate();
  const [bookingOption, setBookingOption] = useState("");
	const [patient, setPatient] = useState<Patient | null>(null)

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/patient/${patientId}`);
        const data = await response.json();
        setPatient(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAppointment();
  }, [patientId]);

  const handleBookingOptionChange = (event: any) => {
    setBookingOption(event.target.value);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    // TODO: add logic to submit form based on booking option
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go Back</button>
      <h2>Create New Appointment</h2>
      <div>
        <input
          type="radio"
          id="facilityBooking"
          name="bookingOption"
          value="facility"
          checked={bookingOption === "facility"}
          onChange={handleBookingOptionChange}
        />
        <label htmlFor="facilityBooking">Book by Facility</label>
      </div>
      <div>
        <input
          type="radio"
          id="specializationBooking"
          name="bookingOption"
          value="specialization"
          checked={bookingOption === "specialization"}
          onChange={handleBookingOptionChange}
        />
        <label htmlFor="specializationBooking">Book by Specialization</label>
      </div>
      <div>
        <input
          type="radio"
          id="doctorBooking"
          name="bookingOption"
          value="doctor"
          checked={bookingOption === "doctor"}
          onChange={handleBookingOptionChange}
        />
        <label htmlFor="doctorBooking">Book by Doctor</label>
      </div>
      {bookingOption === "facility" && <FacilityBookingForm patient={patient}/>}
      {bookingOption === "specialization" && <SpecializationBookingForm patient={patient}/>}
      {bookingOption === "doctor" && <DoctorBookingForm patient={patient}/>}
    </div>
  );
};

export default CreateAppointment;
