// import React, { useState } from 'react'
// import { Navigate } from 'react-router-dom';

// const ForgotPassword = () => {
//     const [email,setEmail] = useState("");
//     const [error, setError]= useState("");
//     const [redirect, setRedirect]= useState("");

   

//     const mailsubmission= async(email)=>{

//         try {
//             const response = await fetch("http://localhost:4000/auth/sendMail2", {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({email}),
//             });
      
//             if (!response.ok) {
//               const json = await response.json();
//               throw new Error(json.error);
//             }
           
//             if (response.ok) {
//                 setRedirect(true);
//               }
           
//           } catch (error) {
//             setError(error.message);
//           }



          
    
//     }


      
//     if (redirect) {
//       return <Navigate to="/otp2" />;
//     }
   





//     const handleSubmission= async(ev)=>{
//         ev.preventDefault();
//         await mailsubmission(email);
//     }

//   return (
//     <div>
//         <form class="forgot-password-form" onSubmit={handleSubmission}>
//     <input
//         type="text"
//         placeholder="Enter email"
//         class="mail-input"
//         value={email}
//         onChange={(event)=>setEmail(event.target.value)}
//     />
//     <button class="mail-button" type="submit">Ok</button>
// </form>
//     </div>
//   )
// }

// export default ForgotPassword






import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [redirect, setRedirect] = useState(false);

    const mailsubmission = async (email) => {
        try {
            const response = await fetch("http://localhost:4000/auth/sendMail2", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const json = await response.json();
                throw new Error(json.error);
            }

            // Store the email in localStorage if the response is OK
            localStorage.setItem('email', email);

            if (response.ok) {
                setRedirect(true);
            }

        } catch (error) {
            setError(error.message);
        }
    }

    if (redirect) {
        return <Navigate to="/otp2" />;
    }

    const handleSubmission = async (ev) => {
        ev.preventDefault();
        await mailsubmission(email);
    }

    return (
        <div>
            <form className="forgot-password-form" onSubmit={handleSubmission}>
                <input
                    type="text"
                    placeholder="Enter email"
                    className="mail-input"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <button className="mail-button" type="submit">Ok</button>
            </form>
        </div>
    )
}

export default ForgotPassword;
