import React, { useState } from "react";

const DoctorPreference = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [dateTime, setDateTime] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Facility:", selectedOption);
    console.log("Selected Date and Time:", dateTime);
  };

  return (
    <div>
      <button style={{ position: 'absolute', top: '25px', right: '25px', fontSize: '30px' }}>Back</button>
      <h1 style={{ fontSize: '40px', marginLeft: '20px' }}>Choose Your Preference,</h1>
      <form onSubmit={handleFormSubmit}>
        <label style={{ fontSize: '30px', marginLeft: '20px' }} htmlFor="options">Select a Facility:</label>
        <select id="options" value={selectedOption} onChange={handleOptionChange} style={{ width: '22%', fontSize: '20px', marginLeft: '20px' }}>
          <option value="">--Please choose an option--</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        {selectedOption && (
          <div style={{ width: '450px', marginLeft: '20px', marginTop: "20px", border: "3px solid black", padding: "10px" }}>
            <label style={{ fontSize: '30px' }} htmlFor="datetime">Date and Time:</label>
            <input type="datetime-local" id="datetime" value={dateTime} onChange={handleDateTimeChange} min="09:00" max="18:00" />
            <button type="submit" style={{ marginLeft: '300px', marginTop: '20px', fontSize: '30px' }}>Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default DoctorPreference;
