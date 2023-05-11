import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Appointment, AppointmentDetail } from "./interfaces";

const AppointmentViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/appointment/${id}`);
        const data = await response.json();
        setAppointment(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAppointment();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!appointment) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Appointment Details</h2>
      <p>Appointment Date: {appointment.appointmentDate}</p>
      <p>Appointment Time: {appointment.appointmentTime}</p>
      <p>Appointment Duration: {appointment.appointmentDuration}</p>
      <p>Patient name: {appointment.patient.firstName} {appointment.patient.lastName}</p>
      <p>Patient ph.no: {appointment.patient.phoneNumber}</p>
      <p>Doctor name: {appointment.doctor.firstName} {appointment.doctor.lastName}</p>
      <p>Doctor ph.no: {appointment.doctor.phoneNumber}</p>
      <p>Facility name: {appointment.facility.name}</p>
      <p>Facility ph.no: {appointment.facility.phoneNumber}</p>
      <p>Facility address: {appointment.facility.address}</p>
      <p>Facility city: {appointment.facility.city}</p>
      <p>Facility zipcode: {appointment.facility.zipCode}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default AppointmentViewer;
