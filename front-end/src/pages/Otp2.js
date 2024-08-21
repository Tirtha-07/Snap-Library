import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const Otp2 = () => {
  const [otp, setOtp]= useState("");
 const [error, setError]= useState("")
 const [redirect, setRedirect]= useState(false);




  const enteredOtp = async (otp) => {
    try {
      const response = await fetch("http://localhost:4000/auth/compareOtp2", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp })
      });

      console.log("response-status::::::::::::::::::::::",response.status);

      if (response.status==200) {
       setRedirect(true)
      }else{
        alert("Wrong otp")
      }

      const json = await response.json();

      // Redirect to home page
     
    } catch (error) {
      setError(error.message);
    } 
  };




  if (redirect) {
    return <Navigate to="/newemail" />;
  }




  const handleOtp= async (ev)=>{
    ev.preventDefault();
    await enteredOtp(otp)
  }
  return (
    <div>
    <form class="otp-form" onSubmit={handleOtp}>
    <input
        type="text"
        placeholder="Enter OTP2"
        class="otp-input"
        value={otp}
        onChange={(event)=>setOtp(event.target.value)}
    />
    <button class="otp-button" type="submit">Ok</button>
</form>

    </div>
  )
}

export default Otp2;