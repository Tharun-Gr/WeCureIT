import React, { useState } from 'react';

const NewDoctor = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  return (
    <div style={{ margin: '20px' }}>
    <div className="form-container">
      <h1 style={{fontSize:'50px'}}>Create a New Doctor account,</h1>
      <form onSubmit={NewDoctor}>
        <div className="form-group">
          <label htmlFor="firstName" style={{ fontSize: '30px' }}>First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)} style={{ height: '30px',width: '200px', fontSize: '20px' }} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" style={{ fontSize: '30px' }}>Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)} style={{ height: '30px', width: '200px', fontSize: '20px' }} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" style={{ height: '30px', fontSize: '30px' }}>Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)} style={{ height: '30px', width: '200px', fontSize: '20px' }} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth" style={{ height: '30px', fontSize: '30px' }}>Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(event) => setDateOfBirth(event.target.value)} style={{ height: '30px'}} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender" style={{fontSize: '30px' }}>Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)} style={{ height: '30px'}} required>
            <option value="">--Select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="email" style={{ fontSize: '30px' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)} style={{ height: '30px', width: '200px', fontSize: '20px' }} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" style={{fontSize: '30px' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)} style={{ height: '30px',width: '200px', fontSize: '20px' }} required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" style={{fontSize: '30px' }}>Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)} style={{ height: '30px', width: '200px', fontSize: '20px' }} required
          />
        </div>
        <button style={{ border: "3px solid black", margin: '50px 325px auto', display: 'block', fontSize: '30px'}} type="submit">Sign Up</button>
      </form>
    </div>
    <div>
      <button style={{ border: "3px solid black", position: 'absolute', fontSize: '30px', top: 40, right: 40 }}>BACK</button>
    </div>
    </div>
  );
};

export default NewDoctor;
