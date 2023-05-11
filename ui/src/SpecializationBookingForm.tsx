import { useEffect, useState } from "react";
import { AppointmentRequest, Doctor, Patient } from "./interfaces";
import { Specialization } from "./interfaces";
import { Facility } from "./interfaces";
import { formatDate, formatTime } from "./utils";

interface Props {
  patient: Patient | null;
}

export const SpecializationBookingForm = (props: Props) => {
  const [specializations, setSpecializations] =
    useState<Specialization[] | []>([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState<Specialization | null>(null);
  const [facilities, setFacilities] = useState<Facility[] | []>([]);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
	const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
	const [duration, setDuration] = useState<number>();
	const [doctors, setDoctors] = useState<Doctor[] | []>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  
  useEffect(() => {
    const fetchSpecializations = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/specialization");
        const data = await response.json();
        setSpecializations(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSpecializations();
  }, []);

  const handleSpecializationChange = async (event: any) => {
    event.preventDefault();
    try {
      const specializationId = event.target.value;
      const specialization = specializations.find(s => s.id === parseInt(specializationId));
      setSelectedSpecialization(specialization || null)
      const response = await fetch(`http://localhost:8080/api/appointment/specialization/facilities/${specializationId}`);
      const data = await response.json();
      setFacilities(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFacilityChange = (event: any) => {
    event.preventDefault();
    const facilityId = event.target.value;
    const facility = facilities.find(f => f.id === parseInt(facilityId));
    setSelectedFacility(facility || null);
  };

  const handleDurationChange = (event: any) => {
		const newDuration = parseInt(event.target.value);
		setDuration(newDuration);
	};	

	const handleDateChange = (event: any) => {
    const date = event.target.value;
		console.log(date)
		const formattedDate = formatDate(date);
		setSelectedDate(formattedDate);
    setSelectedDate(date);
  };

  const handleTimeChange = (event: any) => {
    const time = event.target.value;
		console.log(time)
		const formattedTime = formatTime(time);
		setSelectedTime(formattedTime);

		const fetchDoctors = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/appointment/facility-spec-date-time/${selectedFacility?.id}/${selectedSpecialization?.id}/${selectedDate}/${selectedTime}`);
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctors();
		setSelectedDoctor(doctors[0]);
  };

  const handleDoctorChange = (event: any) => {
    const doctorId = event.target.value;
    const doctor = doctors.find(f => f.id === parseInt(doctorId));
    setSelectedDoctor(doctor || null);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (selectedFacility?.workSchedules) {
			selectedFacility.workSchedules = null;
		}

		const appointmentRequest: AppointmentRequest = {
			appointmentDate: selectedDate,
			appointmentTime: selectedTime,
			appointmentDuration: duration || 15,
			patient: props.patient,
			doctor: selectedDoctor,
			facility: selectedFacility,
			room : {
        "id": 1,
        "appointment": [
            {
                "id": 1,
                "appointmentDate": "2023-04-22",
                "appointmentTime": "12:00:00",
                "appointmentDuration": 30
            }
        ]
    	}
		};
	
		try {
			const response = await fetch("http://localhost:8080/api/appointment/patient", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(appointmentRequest),
			});
			console.log(response);
			if (!response.ok) {
				throw new Error("Failed to book appointment.");
			}
			
			alert("Appointment booked successfully!");
			// navigate(`/create-appointment/${props.patient?.id}`);
		} catch (error) {
			console.error(error);
			alert("Failed to book appointment.");
		}
	};

  return (
    <div>
      <h3>Book by Specialization</h3>
      <form onSubmit={handleFormSubmit}>
        {specializations && <label htmlFor="specialization">Select a Specialization:
          <select onClick={handleSpecializationChange}>
            {specializations.map((specialization) => (
              <option key={specialization.id} value={specialization.id}>
                {specialization.name}
              </option>
            ))}
          </select>
        </label>}
        <br />
        {selectedSpecialization && <label htmlFor="facility">Select a Facility:
          <select onClick={handleFacilityChange}>
            {facilities.map((facility) => (
              <option key={facility.id} value={facility.id}>
                {facility.name}
              </option>
            ))}
          </select>
        </label>}
        <br />
				{selectedSpecialization && <label>
					Select a duration:
					<select value={duration} onClick={handleDurationChange}>
						<option value={15}>15 minutes</option>
						<option value={30}>30 minutes</option>
						<option value={60}>60 minutes</option>
					</select>
				</label>}
        <br />
				{duration && <label>
          Select a date:
          <input type="date" onChange={handleDateChange} />
        </label>}
        <br />
        {selectedDate && <label>
          Select a time:
          <input type="time" onChange={handleTimeChange} />
        </label>}
        <br /> 
        {selectedTime && <label>
          Select a Doctor:
          <select onClick={handleDoctorChange}>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.firstName} {doctor.lastName}
              </option>
            ))}
          </select>
        </label>}
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};
