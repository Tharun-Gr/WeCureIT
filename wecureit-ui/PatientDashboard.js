import React, { useState } from 'react';

function HeadingPatient() {
  return (
    <div>
      <h1>Welcome Username,</h1>
    </div>
  );
}

function BookNewAppointment() {
  return (
    <div>
      <button style={{ border: "3px solid black", position: 'absolute', fontSize: '40px', top: 520, left: 400 }}>Book New Appointment</button>
    </div>
  );
}

function DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState('');

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }
  return (
    <div style={{ position: 'absolute', top: 20, right: 20 }}>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange} style={{ height: '50px', width: '200px', border: '3px solid black' }}>
        <option value="" style={{ fontWeight: 'bold' }}>My Account</option>
        <option value="option1">Profile</option>
        <option value="option2">Sign Out</option>
      </select>
    </div>
  );
}

function Box1(props) {
  return (
    <div style={{ border: "3px solid black", padding: "10px", height: "350px", width: "900px", marginLeft: "18%", marginTop: "50px"}}>
      <h1>{props.heading}</h1>
      {props.children}
    </div>
  );
}

function PatientProfile() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ marginLeft: '20px' }}>
        <HeadingPatient />
        <Box1 heading="Your Appointments:">
          <p></p>
        </Box1>
      </div>
      <BookNewAppointment />
      <DropdownMenu />
    </div>
  );
}

export default PatientProfile;
