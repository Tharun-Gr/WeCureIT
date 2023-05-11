import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';
import SignUpPatient from './SignUpPatient';
import PatientDashboard from './PatientDashboard';
import AppointmentViewer from './AppointmentViewer';
import CreateAppointment from './CreateAppointment';
import PatientAccount from './PatientAccount';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={SignIn} />
        <Route path="/signup-patient" Component={SignUpPatient} />
        <Route path="/patient-dashboard" Component={PatientDashboard} />
        <Route path="/appointments/:id" Component={AppointmentViewer} />
        <Route path="/create-appointment/:patientId" Component={CreateAppointment} />
        <Route path="/patient-account" Component={PatientAccount} />
      </Routes>
    </Router>
  );
}

export default App;