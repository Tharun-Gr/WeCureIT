import { useLocation, useNavigate } from 'react-router-dom';
import { AppointmentDetail, Patient } from './interfaces';
import { PatientAppointmentTable } from './AppointmentTable';
import { useEffect, useState } from 'react';

function PatientDashboard(props: any) {
  const location = useLocation();
  const navigate = useNavigate();
  const locationPatient: Patient = location.state;
  const [patient, setPatient] = useState<Patient>(locationPatient);

  useEffect(() => {
    fetch(`http://localhost:8080/api/patient/${locationPatient.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPatient(data);
      })
      .catch((error) => {
        console.error(error);
        // display error message to user
      });
  }, []);
  
  const handleMenuOptionClick = (option: string) => {
    switch (option) {
      case "account":
        // handle account option click
        navigate('/patient-account', { state: patient });
        break;
      case "signout":
        // handle sign out option click
        navigate('/');
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div>
          <select onChange={(e) => handleMenuOptionClick(e.target.value)}>
          <option value="No Select">--Create Appointment--</option>
            <option value="account">My Account</option>
            <option value="signout">Sign Out</option>
          </select>
        </div>
      <h2>Welcome {patient.firstName} {patient.lastName}!</h2>
      <PatientAppointmentTable patient={patient} />
    </div>
  );
}

export default PatientDashboard;
