import { useState, useEffect } from "react";
import { AppointmentRequest, Doctor, Facility, Patient, Specialization } from "./interfaces";
import { formatDate, formatTime } from "./utils";
import { useNavigate } from "react-router-dom";

interface Props {
	patient: Patient | null
}

const FacilityBookingForm = (props: Props) => {
	const navigate = useNavigate();
  const [facilities, setFacilities] = useState<Facility[] | []>([]);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [selectedSpecialization, setSelectedSpecialization] = useState<Specialization | null>(null);
	const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
	const [doctors, setDoctors] = useState<Doctor[] | []>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
	const [duration, setDuration] = useState<number>();

  useEffect(() => {
		console.log("props",props)
    const fetchFacilities = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/facility");
        const data = await response.json();
        setFacilities(data);
				setSelectedFacility(facilities[0])
      } catch (error) {
        console.log(error);
      }
    };
    fetchFacilities();
  }, []);

  const handleFacilityChange = (event: any) => {
    const facilityId = event.target.value;
    const facility = facilities.find(f => f.id === parseInt(facilityId));
    setSelectedFacility(facility || null);
		setSelectedSpecialization(selectedFacility?.specializations[0] || null)
  };

  const handleSpecializationChange = (event: any) => {
    const specializationId = event.target.value;
    const specialization = selectedFacility?.specializations.find(s => s.id === parseInt(specializationId));
    setSelectedSpecialization(specialization || null);
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

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
			navigate(`/create-appointment/${props.patient?.id}`);
		} catch (error) {
			console.error(error);
			alert("Failed to book appointment.");
		}
	};
	

  return (
    <div>
      <h3>Book by Facility</h3>
      <form onSubmit={handleSubmit}>
        {facilities && <label>
          Select a facility:
          <select onClick={handleFacilityChange}>
            {facilities.map((facility) => (
              <option key={facility.id} value={facility.id}>
                {facility.name}
              </option>
            ))}
          </select>
        </label>}
        <br />
        {selectedFacility && <label>
          Select a specialization:
          <select onClick={handleSpecializationChange}>
            {selectedFacility?.specializations.map((specialization) => (
              <option key={specialization.id} value={specialization.id}>
                {specialization.name}
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
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default FacilityBookingForm;
