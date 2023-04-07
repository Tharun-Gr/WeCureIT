import React, { useState } from 'react';

function Heading() {
  return (
    <div>
      <h1 style={{ marginLeft: '20px' }}>Welcome Dr.DoctorName,</h1>
    </div>
  );
}

function NewSchedule() {
  return (
    <div>
      <button style={{ border: "3px solid black", position: 'absolute', fontSize: '40px', top: 520, left: 20 }}>Create New Schedule</button>
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
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleOptionChange}
        style={{ height: '50px', width: '200px', border: '3px solid black' }}
      >
        <option value="" style={{ fontWeight: 'bold' }}>My Account</option>
        <option value="option1">Profile</option>
        <option value="option2">Sign Out</option>
      </select>
    </div>
  );
}

function Box1(props) {
  return (
    <div style={{ border: "3px solid black", padding: "10px", height: '250px', width: '60%', marginTop: '50px', marginLeft: '20px' }}>
      <h1>{props.heading}</h1>
      {props.children}
    </div>
  );
}

function Box2() {
  return (
    <div style={{ border: "3px solid black", padding: "10px", height: '250px', width: '50%', position: 'absolute', bottom: 20, right: 20 }}>
      <h1>Your Schedule:</h1>
      <p></p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Heading />
      <NewSchedule />
      <DropdownMenu />
      <Box1 heading="Your Appointments:">
        <p></p>
      </Box1>
      <Box2 />
    </div>
  );
}

export default App;
