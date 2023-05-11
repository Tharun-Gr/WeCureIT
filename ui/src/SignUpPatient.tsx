import React, { useState } from 'react';
import axios from 'axios';
import { PatientSignUpData, Patient } from './interfaces';

function SignUpPatient() {
  const [formData, setFormData] = useState<PatientSignUpData>({
    email: '',
    password: '',
    userType: 'patient',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post<Patient>('http://localhost:8080/api/patient', formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          First Name:
          <input name="firstName" value={formData.firstName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input name="lastName" value={formData.lastName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Address:
          <input name="address" value={formData.address} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          City:
          <input name="city" value={formData.city} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Zip Code:
          <input name="zipCode" value={formData.zipCode} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPatient;
