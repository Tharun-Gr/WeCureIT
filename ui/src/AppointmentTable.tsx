import { useEffect, useState } from "react";
import { AppointmentDetail, Patient } from "./interfaces";
import { useNavigate } from 'react-router-dom';

interface Props {
    patient: Patient;
  }
  
export const PatientAppointmentTable = ({ patient }: Props) => {
  const navigate = useNavigate();
  const [pastAppointments, setPastAppointments] = useState<AppointmentDetail[]>([]);

  useEffect(() => {
    const now = Date.now();
    const filteredAppointments = patient.patientAppointments.filter(appointment => {
      const appointmentDate = Date.parse(appointment.appointmentDate);
      return appointmentDate < now || (appointmentDate === now);
    });
    setPastAppointments(filteredAppointments);
  }, [patient]);
  
  const handleViewAppointment = (appointment: AppointmentDetail) => {
    console.log(`View appointment with id ${appointment.id}`);
    navigate(`/appointments/${appointment.id}`);
    // TODO: add logic to show appointment details
  };

  const handleDeleteAppointment = (appointment: AppointmentDetail) => {
    console.log(`Delete appointment with id ${appointment.id}`);
    // TODO: add logic to delete appointment
  };

  const handleUpdateAppointment = (appointment: AppointmentDetail) => {
    console.log(`Update appointment with id ${appointment.id}`);
    // TODO: add logic to update appointment
  };

  const handleCreateNewAppointment = () => {
    navigate(`/create-appointment/${patient.id}`);
  }

  return (
      <div>
        <h3>Your Appointments</h3>
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
                <button onClick={() => handleDeleteAppointment(appointment)}>
                  Delete
                </button>
                <button onClick={() => handleUpdateAppointment(appointment)}>
                  Update
                </button>
              </td>
            </tr>
            ))}
        </tbody>
        </table>
        <button onClick={handleCreateNewAppointment}>Create New Appointment</button>
      </div>
  );
};