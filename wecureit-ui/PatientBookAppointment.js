import React, { useState } from "react";

const FacilitySelection = () => {
  const [selectedFacility, setSelectedFacility] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const handleFacilitySelection = (event) => {
    setSelectedFacility(event.target.value);
  };
  const handleDateTimeSelection = (event) => {
    setSelectedDateTime(event.target.value);
  };
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <select style={{ fontSize: '30px', display: 'block', marginBottom: '10px',textAlign: 'center'  }} value={selectedFacility} onChange={handleFacilitySelection}>
            <option value="">--Please choose a facility--</option>
            <option value="facility1">Facility 1</option>
            <option value="facility2">Facility 2</option>
            <option value="facility3">Facility 3</option>
            <option value="facility4">Facility 4</option>
            <option value="facility5">Facility 5</option>
      </select>
      
      <select style={{ fontSize: '30px', display: 'block', marginBottom: '10px',textAlign: 'center'  }}>
            <option value="">--Please choose an Specialisation--</option>
            <option value="option1">Specialisation 1</option>
            <option value="option2">Specialisation 2</option>
            <option value="option3">Specialisation 3</option>
            <option value="option4">Specialisation 4</option>
            <option value="option5">Specialisation 5</option>
          </select>
          <select style={{ fontSize: '30px', display: 'block', marginBottom: '10px',textAlign: 'center'  }}>
            <option value="">--Please choose an Doctor--</option>
            <option value="option1">Doctor 1</option>
            <option value="option2">Doctor 2</option>
            <option value="option3">Doctor 3</option>
            <option value="option4">Doctor 4</option>
            <option value="option5">Doctor 5</option>
          </select>
         
          <input type="datetime-local" id="datetime" value={selectedDateTime} onChange={handleDateTimeSelection} min="09:00" max="18:00" style={{ fontSize: '20px' }}   />
      </div> 
</>
  );
};
const DoctorSelection = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const handleDoctorSelection = (event) => {
    setSelectedDoctor(event.target.value);
  };
  const handleDateTimeSelection = (event) => {
    setSelectedDateTime(event.target.value);
  };
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <select style={{ fontSize: '30px', display: 'block', marginBottom: '10px',textAlign: 'center'  }} value={selectedDoctor} onChange={handleDoctorSelection}>
            <option value="">--Please choose a Doctor--</option>
            <option value="Doctor1">Doctor 1</option>
            <option value="Doctor2">Doctor 2</option>
            <option value="Doctor3">Doctor 3</option>
            <option value="Doctor4">Doctor 4</option>
            <option value="Doctor5">Doctor 5</option>
      </select>
      <select style={{ fontSize: '30px', display: 'block', marginBottom: '10px',textAlign: 'center'  }}>
            <option value="">--Please choose an Facility--</option>
            <option value="option1">Facility 1</option>
            <option value="option2">Facility 2</option>
            <option value="option3">Facility 3</option>
            <option value="option4">Facility 4</option>
            <option value="option5">Facility 5</option>
          </select>
          <input type="datetime-local" id="datetime" value={selectedDateTime} onChange={handleDateTimeSelection} min="09:00" max="18:00" style={{ fontSize: '20px' }} />
          </div>
    </>
  );
};
const SpecialisationSelection = () => {
  const [selectedSpecialisation, setSelectedSpecialisation] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const handleSpecialisationSelection = (event) => {
    setSelectedSpecialisation(event.target.value);
  };
  const handleDateTimeSelection = (event) => {
    setSelectedDateTime(event.target.value);
  };
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <select style={{ fontSize: '30px', display: 'block', marginBottom: '10px',textAlign: 'center'  }} value={selectedSpecialisation} onChange={handleSpecialisationSelection}>
            <option value="">--Please choose a Specialisation--</option>
            <option value="Specialisation1">Specialisation 1</option>
            <option value="Specialisation2">Specialisation 2</option>
            <option value="Specialisation3">Specialisation 3</option>
            <option value="Specialisation4">Specialisation 4</option>
            <option value="Specialisation5">Specialisation 5</option>
      </select>
      <select style={{ fontSize: '30px', display: 'block', marginBottom: '10px',textAlign: 'center'  }}>
            <option value="">--Please choose an Facility--</option>
            <option value="option1">Facility 1</option>
            <option value="option2">Facility 2</option>
            <option value="option3">Facility 3</option>
            <option value="option4">Facility 4</option>
            <option value="option5">Facility 5</option>
          </select>
          <select style={{ fontSize: '30px', display: 'block', marginBottom: '10px',textAlign: 'center'  }}>
            <option value="">--Please choose an Doctor--</option>
            <option value="option1">Doctor 1</option>
            <option value="option2">Doctor 2</option>
            <option value="option3">Doctor 3</option>
            <option value="option4">Doctor 4</option>
            <option value="option5">Doctor 5</option>
          </select>
          <input type="datetime-local" id="datetime" value={selectedDateTime} onChange={handleDateTimeSelection} min="09:00" max="18:00" style={{ fontSize: '20px' }} />
          </div>
    </>
  );
};
const PageWithButtonsAndDropdowns = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <div>
      <button style={{ position: 'absolute', top: '25px', right: '40px', fontSize: '30px' }}>Back</button>
      
      <h1 style={{ fontSize: '40px', marginLeft: '40px' }}>Book an appointment by:</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button style= {{fontSize: '30px', marginLeft: '40px'}} onClick={() => handleButtonClick(0)}>Facility</button>
        <button style= {{fontSize: '30px'}} onClick={() => handleButtonClick(1)}>Doctor</button>
        <button style= {{fontSize: '30px', marginRight: '40px'}} onClick={() => handleButtonClick(2)}>Specialisation</button>
      </div>

      {selectedButton !== null && (
        <div style={{ margin: '40px 40px',  border: "3px solid black", padding: '50px' }}>
          {selectedButton === 0 && <FacilitySelection />}
          {selectedButton === 1 && <DoctorSelection/>}
          {selectedButton === 2 && <SpecialisationSelection/>}
        </div>
        
      )}
     <div style={{ position: 'absolute', bottom: '100px', left: '50%', transform: 'translateX(-50%)',marginTop: '400px' }}>
      <button style={{ fontSize: '30px' }}>Book Appointment</button>
      </div>
    </div>
  );
};

export default PageWithButtonsAndDropdowns;
