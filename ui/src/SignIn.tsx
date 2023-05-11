import React, { useState } from 'react';
import axios from 'axios';
import { Admin, Doctor, Patient, SignInFormData } from './interfaces';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignInFormData>({ email: '', password: '' });
  const [userType, setUserType] = useState<string>('patient');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      let response: any;
      let url: string;

      if (userType === 'patient') {
        url = 'http://localhost:8080/api/signin/patient';
        response = await axios.post<Patient>(url, formData);
        navigate('/patient-dashboard', { state: response.data });
      } else if (userType === 'doctor') {
        url = 'http://localhost:8080/api/signin/doctor';
        response = await axios.post<Doctor>(url, formData);
      } else if (userType === 'admin') {
        url = 'http://localhost:8080/api/signin/admin';
        response = await axios.post<Admin>(url, formData);
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserType(value);
  };

  return (
    <div>
      <h2>Sign In</h2>
      <div>
        <label>
          <input
            type="radio"
            name="userType"
            value="patient"
            checked={userType === 'patient'}
            onChange={handleRadioChange}
          />
          Patient
        </label>
        <label>
          <input
            type="radio"
            name="userType"
            value="doctor"
            checked={userType === 'doctor'}
            onChange={handleRadioChange}
          />
          Doctor
        </label>
        <label>
          <input
            type="radio"
            name="userType"
            value="admin"
            checked={userType === 'admin'}
            onChange={handleRadioChange}
          />
          Admin
        </label>
      </div>
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
        <button type="submit">Sign In</button>
      </form>
      <Link to="/signup-patient">Don't have an account? Sign up here!</Link>
    </div>
  );
}

export default SignIn;
