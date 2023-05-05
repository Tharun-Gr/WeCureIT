import React, { useState } from 'react';

function HeadingAdminProfile() {
  return (
    <div>
      <h1 style={{ margin: '35px' }}>Admin Profile,</h1>
    </div>
  );
}

function Back() {
  return (
    <div>
      <button style={{ border: "3px solid black", position: 'absolute', fontSize: '30px', top: 30, right: 35 }}>BACK</button>
    </div>
  );
}

function AdminDetails() {
  const boxStyle = {
    margin: '35px',
    width: '95%',
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
      <AdminDetails />
    </div>
  );
}

function Edit() {
  return (
    <div>
      <button style={{ border: "3px solid black", position: 'absolute', fontSize: '30px', top: 550, left: '85%' }}>Edit</button>
    </div>
  );
}



function AdminProfile() {
  return (
    <div>
      <HeadingAdminProfile />
      <Back />
      <TwoBoxes />
      <Edit />
    </div>
  );
}

export default AdminProfile;
