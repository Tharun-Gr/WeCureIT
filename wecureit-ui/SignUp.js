import React, { useState } from 'react';

function HeadingSignUp() {
  return (
    <div>
      <h1 style={{ margin: '20px' }}>Create a WeCureIt account,<br /></h1>
    </div>
  );
}

function SignUpButton() {
  return (
    <div>
      <button style={{ border: "3px solid black", position: 'absolute', fontSize: '40px', top: 600, left: '42%' }}>SIGN UP</button>
    </div>
  );
}

function BackLogin() {
  return (
    <div>
      <button style={{ border: "3px solid black", position: 'absolute', fontSize: '30px', top: 20, right: 20 }}>LOG IN</button>
    </div>
  );
}

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Phone Number:', phoneNumber);
    console.log('Birthdate:', birthDate);
    console.log('Gender:', gender);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ width: '400px', height: '100px', display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="firstName" style={{ marginBottom: '5px', fontSize: '25px' }}>FirstName:</label>
          <input type="text" id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} style={{ width: '200px', height: '25px'}} required />
        </div>

        <div style={{ width: '400px', height: '100px', display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="lastName" style={{ marginBottom: '5px', fontSize: '25px'  }}>LastName:</label>
          <input type="text" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} style={{ width: '200px' }} required />
        </div>

        <div style={{ width: '400px', height: '100px', display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="phoneNumber" style={{ marginBottom: '5px', fontSize: '25px'  }}>PhoneNumber:</label>
          <input type="text" id="phoneNumber" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} style={{ width: '200px' }} required />
        </div>

        <div style={{ width: '400px', height: '100px', display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="birthDate" style={{ marginBottom: '5px', fontSize: '25px'  }}>BirthDate:</label>
          <input type="date" id="birthDate" value={birthDate} onChange={(event) => setBirthdate(event.target.value)} style={{ width: '200px' }} required />
        </div>

        <div style={{ width: '400px', height: '100px', display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="gender">Gender:</label>
            <select id="gender" value={gender} onChange={(event) => setGender(event.target.value)} style={{width: '200px'}} required>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
        </div>

        <div style={{ width: '400px', height: '100px', display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="email" style={{ marginBottom: '5px', fontSize: '25px'  }}>Email:</label>
          <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} style={{ width: '200px' }} required />
        </div>

        <div style={{ width: '400px', height: '100px', display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="password" style={{ marginBottom: '5px', fontSize: '25px'  }}>Password:</label>
          <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} style={{ width: '200px' }} required />
        </div>

        <div style={{ width: '400px', height: '100px', display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="confirmPassword" style={{ marginBottom: '5px', fontSize: '25px'  }}>Confirm Password:</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} style={{ width: '200px' }} required />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

function PatientProfile() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <HeadingSignUp />
      <SignUp />
      <SignUpButton />
      <BackLogin />
    </div>
  );
}

export default PatientProfile;
