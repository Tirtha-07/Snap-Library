// import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';

// const NewPassword = () => {
//   const [email, setEmail] = useState("");
//   const [newpassword, setNewpassword] = useState("");
//   const [redirect, setRedirect]= useState(false)

//   const updatePassword = async (email, newpassword) => {
//     try {
//       const response = await fetch(`http://localhost:4000/auth/updatePassword/${email}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ newpassword })
//       });

//       if (!response.ok) {

//         throw new Error(`Error: ${response.status} ${response.statusText}`);
//       }

      

//       const data = await response.json();


//       if(data){
//         setRedirect(true);
//       }
//       console.log("dat>>>>>>>>>>>>>>>>>>>>>",data);
      
//     } catch (error) {
//       console.error('Failed to update password:', error);
//     }
//   };

//   const handlePassword = async (ev) => {
//     ev.preventDefault();
//     await updatePassword(email, newpassword);
//   };

//   if(redirect){
//    return <Navigate to="/login" />;
//   }

  
//   return (
//     <div>
//       <form className="new-mail" onSubmit={handlePassword}>
//         <input
//           type="text"
//           placeholder="Enter Email"
//           className="mail-input"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Enter New Password"
//           className="mail-input"
//           value={newpassword}
//           onChange={(event) => setNewpassword(event.target.value)}
//         />
//         <button className="new-mail-button" type="submit">Ok</button>
//       </form>
//     </div>
//   );
// };

// export default NewPassword;







import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const NewPassword = () => {
  const [email, setEmail] = useState("");
  const [newpassword, setNewpassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Access email from localStorage
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      console.error('No email found in localStorage');
      // Handle case where email is not found (e.g., redirect back to forgot password page)
    }
  }, []);

  const updatePassword = async (email, newpassword) => {
    try {
      const response = await fetch(`http://localhost:4000/auth/updatePassword/${email}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newpassword })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (data) {
        setRedirect(true);
      }

      console.log("dat>>>>>>>>>>>>>>>>>>>>>", data);
      
    } catch (error) {
      console.error('Failed to update password:', error);
    }
  };

  const handlePassword = async (ev) => {
    ev.preventDefault();
    await updatePassword(email, newpassword);
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <form className="new-mail" onSubmit={handlePassword}>
        {/* Removed the email input field */}
        <input
          type="password"
          placeholder="Enter New Password"
          className="mail-input"
          value={newpassword}
          onChange={(event) => setNewpassword(event.target.value)}
        />
        <button className="new-mail-button" type="submit">Ok</button>
      </form>
    </div>
  );
};

export default NewPassword;
