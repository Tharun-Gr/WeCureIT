import React, { useState } from 'react';

function HeadingPatientProfile() {
  return (
    <div>
      <h1 style={{ margin: '30px' }}>Patient Profile,</h1>
    </div>
  );
}

function Back() {
  return (
    <div>
      <button style={{ border: "3px solid black", position: 'absolute', fontSize: '30px', top: 30, right: 30 }}>BACK</button>
    </div>
  );
}

function PatientDetails() {
  const boxStyle = {
    margin: '30px',
    width: '45%',
    height: '500px',
    backgroundColor: 'grey'
  };

  return (
    <div style={boxStyle}></div>
  );
}

function PastAppointments() {
  const boxStyle = {
    margin: '30px',
    marginLeft: '30px',
    width: '45%',
    height: '500px',
    backgroundColor: 'grey'
  };

  return (
    <div style={boxStyle}></div>
  );
}

function TwoBoxes() {
  const containerStyle = {
    display: 'flex'
  };

  return (
    <div style={containerStyle}>
      <PatientDetails />
      <PastAppointments />
    </div>
  );
}

function Edit() {
  return (
    <div>
      <button style={{ border: "3px solid black", position: 'absolute', fontSize: '30px', top: 550, left: '38%' }}>Edit</button>
    </div>
  );
}

function MoreInfo() {
  return (
    <div>
      <button style={{ border: "3px solid black", position: 'absolute', fontSize: '30px', top: 550, right: '5%' }}>More Info</button>
    </div>
  );
}


function PatientProfile() {
  return (
    <div>
      <HeadingPatientProfile />
      <Back />
      <TwoBoxes />
      <Edit />
      <MoreInfo />
    </div>
  );
}

export default PatientProfile;
