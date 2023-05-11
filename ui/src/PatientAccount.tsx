import { useEffect, useState } from "react";
import { AppointmentDetail, Patient } from "./interfaces";
import { useLocation, useNavigate } from "react-router-dom";

const PatientAccount = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationPatient: Patient = location.state;
  const [editablePatient, setEditablePatient] = useState<Patient>(locationPatient);
  const [pastAppointments, setPastAppointments] = useState<AppointmentDetail[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/patient/${locationPatient.id}`)
      .then((response) => response.json())
      .then((data) => {
        setEditablePatient(data);
      })
      .catch((error) => {
        console.error(error);
        // display error message to user
      });
  }, []);

  useEffect(() => {
    const now = Date.now();
    const filteredAppointments = editablePatient.patientAppointments.filter(appointment => {
      const appointmentDate = Date.parse(appointment.appointmentDate);
      return appointmentDate < now || (appointmentDate === now);
    });
    setPastAppointments(filteredAppointments);
  }, [editablePatient]);
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditablePatient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = (event: any) => {
    event.preventDefault();
    fetch("http://localhost:8080/api/patient", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editablePatient),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update patient information");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Patient information updated successfully:", data);
        // navigate to dashboard or display success message
      })
      .catch((error) => {
        console.error(error);
        // display error message to user
      });
  };
  

  const handleGoBack = () => {
    navigate(-1);
  };


  const handleViewAppointment = (appointment: AppointmentDetail) => {
    console.log(`View appointment with id ${appointment.id}`);
    navigate(`/appointments/${appointment.id}`);
    // TODO: add logic to show appointment details
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go Back</button>
      <h2>My Account</h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={editablePatient.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={editablePatient.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={editablePatient.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            value={editablePatient.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            value={editablePatient.city}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code:</label>
          <input
            type="text"
            name="zipCode"
            value={editablePatient.zipCode}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save Changes
        </button>
      </form>
      <br />
      <br />
      <div>
        <h3>Appointments History</h3>
        <table>
        <thead>
            <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Duration</th>
            </tr>
        </thead>
        <tbody>
            {pastAppointments.map((appointment: AppointmentDetail) => (
            <tr key={appointment.id}>
                <td>{appointment.appointmentDate}</td>
                <td>{appointment.appointmentTime}</td>
                <td>{appointment.appointmentDuration}</td>
                <td>
                <button onClick={() => handleViewAppointment(appointment)}>
                  View
                </button>
              </td>
            </tr>
            ))}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientAccount;
