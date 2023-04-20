import React, { useState } from 'react';

function HeadingSignIn() {
  return (
    <div style={{position: 'absolute', fontSize: '20px', top: 130, right: 130 }}>
      <h1>Sign In To Your Account</h1>
    </div>
  );
}
function HeadingRegister() {
  return (
    <div style={{position: 'absolute', fontSize: '20px', top: 510, right: 210 }}>
      <h2>Register as New User</h2>
    </div>
  );
  }

function Login() {
  return (
    <div>
      <button style={{ border: "3px solid black", position: 'absolute', fontSize: '30px', top: 480, right: 300 }}>LOG IN</button>
    </div>
  );
}
const MyComponent = () => {
  const [textValue, setTextValue] = useState("");
 
  
    const handleTextChange = (event) => {
      setTextValue(event.target.value);
    };
  
    return (
      <div style={{ position: 'absolute', fontSize: '30px', height: '500px', width: '550px',  top: 250, right: 10 }}>
        <label>
          Username <br/>
          <input type="text" 
          value={textValue}
           onChange={handleTextChange} 
           placeholder="Enter the Username" style={{border: "3px solid black",height: '30px', width: '400px'}}
           />
        </label>
      </div>
    );
  };
  const MyComponent1 = () => {
    const [textValue, setTextValue] = useState("");
   
    
      const handleTextChange = (event) => {
        setTextValue(event.target.value);
      };
    
      return (
        <div style={{ fontweight:'bold',position: 'absolute',fontSize: '30px', height: '400px', width: '550px', top: 350, right: 10 }}>
          <label>
            Password <br/>
            <input type="text" 
            value={textValue}
             onChange={handleTextChange} 
             placeholder="Enter the password" style={{border: "3px solid black",height: '30px', width: '400px'}}
             />
          </label>
        </div>
      );
    };

function Box1(props) {
  return (
    
    <div style={{ textAlign: 'center', background: 'grey',color: 'black',border: "3px solid black", padding: "10px", height: "400px", width: "550px", marginLeft: "20%", marginTop: "150px"}}>
      <h1>{props.heading }</h1>
      {props.children}
    </div>
  );
}


function LoginPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ marginLeft: '20px',}}>
        <HeadingSignIn />
        <HeadingRegister />
        <div style={{fontSize:'45px', position:'absolute'}}>
        <Box1 heading="WeCureIt" >
        </Box1>
        </div>
      </div>
      <Login />
      <MyComponent />
      <handleUsernameChange />
      <MyComponent1 />   
    </div>
  );
}

export default LoginPage;
