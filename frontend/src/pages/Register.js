

// import { useState } from "react";
// import { Navigate } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ad1 from "../assets/ad 1.jpg";
// import ad2 from "../assets/ad 2.jpg";
// import ad3 from "../assets/ad 3.jpg";

// export default function RegisterPage() {

//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [redirect, setRedirect] = useState(false);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [transfer, setTransfer] = useState(false);

//   const { dispatch } = useAuthContext();

//   const signup = async (username, password) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("http://localhost:4000/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ firstname, lastname, username,email, password }),
//       });

//       if (!response.ok) {
//         const json = await response.json();
//         throw new Error(json.error);
//       }

//       const json = await response.json();
//       localStorage.setItem("user", JSON.stringify(json));
//       dispatch({ type: "LOGIN", payload: json });

//       setRedirect(true);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleRegister = async (ev) => {
//     ev.preventDefault();
//     await signup(username, password);
//   };

//   const handleTransfer = () => {
//     setTransfer(true);
//   };

//   if (redirect) {
//     return <Navigate to="/login" />;
//   }

//   if (transfer) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div className="boddy">
// {/* ------------------------------------------------------------------- */}
//     <div className="reg-log">
//       <form className="register" onSubmit={handleRegister}>
//         <h1>Register</h1>
//         <input
//           type="text"
//           placeholder="Firstname"
//           value={firstname}
//           onChange={(event) => setFirstname(event.target.value)}
//         />



// <input
//           type="text"
//           placeholder="Lastname"
//           value={lastname}
//           onChange={(event) => setLastname(event.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//         />

// <input
//           type="text"
//           placeholder="Email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//         <button className="register-btn" disabled={isLoading}>Register</button>
//         <p>
//           Already a member?...{" "}
//           <button className="login-upload-btn" type="button" onClick={handleTransfer}>
//             Login
//           </button>
//         </p>
//         {error && <div className="error">{error}</div>}
//       </form>
//     </div>
//     </div>
//   );
// }












// import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ad1 from "../assets/headphone.jpg";
// import ad2 from "../assets/camera.jpg";
// import ad3 from "../assets/pexels-scottwebb-1029611.jpg";

// export default function RegisterPage() {

//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [profilePicture, setProfilePicture] = useState("");
//   const [redirect, setRedirect] = useState(false);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [transfer, setTransfer] = useState(false);
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);


//   const { dispatch } = useAuthContext();



//   const bgImages = [ad1, ad2, ad3];


//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
//     }, 15000); // Change image every 5 seconds

//     return () => clearInterval(intervalId);
//   }, [bgImages.length]);

//   const currentBgImageUrl = bgImages[currentBgIndex];

//   const signup = async (username, password) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("http://localhost:4000/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ firstname, lastname, username,email, password,profilePicture }),
//       });

//       if (!response.ok) {
//         const json = await response.json();
//         throw new Error(json.error);
//       }

//       const json = await response.json();
//       localStorage.setItem("user", JSON.stringify(json));
//       dispatch({ type: "LOGIN", payload: json });

//       setRedirect(true);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleRegister = async (ev) => {
//     ev.preventDefault();
//     await signup(username, password);
//   };

//   const handleTransfer = () => {
//     setTransfer(true);
//   };

//   if (redirect) {
//     return <Navigate to="/login" />;
//   }

//   if (transfer) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div className="boddy"
//     style={{
//       width: '100%',
//       height:'900px',
//       marginBottom: '-32%',
//       backgroundSize: 'cover',
//       // backgroundImage: `url(${require('../assets/cam.jpg')})`,
//         backgroundImage: `url(${currentBgImageUrl})`,
//         transition: 'background-image 1s cubic-bezier(0.25, 0.1, 0.25, 1)'
     

//     }}
//     >
// {/* ------------------------------------------------------------------- */}
//     <div className="reg-log">
//       <form className="register" onSubmit={handleRegister}>
//         <h1>Register</h1>
//         <input
//           type="text"
//           placeholder="Firstname"
//           value={firstname}
//           onChange={(event) => setFirstname(event.target.value)}
//         />



// <input
//           type="text"
//           placeholder="Lastname"
//           value={lastname}
//           onChange={(event) => setLastname(event.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//         />

// <input
//           type="text"
//           placeholder="Email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />

//        <input
//         type="file"
//         onChange={ev => setProfilePicture(ev.target.files)}
//       />
//         <button className="register-btn" disabled={isLoading}>Register</button>
//         <p>
//           Already a member?...{" "}
//           <button className="login-upload-btn" type="button" onClick={handleTransfer}>
//             Login
//           </button>
//         </p>
//         {error && <div className="error">{error}</div>}
//       </form>
//     </div>
//     </div>
//   );
// }
















// import { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ad1 from "../assets/headphone.jpg";
// import ad2 from "../assets/camera.jpg";
// import ad3 from "../assets/pexels-scottwebb-1029611.jpg";

// export default function RegisterPage() {

//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [profilePicture, setProfilePicture] = useState("");
//   const [redirect, setRedirect] = useState(false);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [transfer, setTransfer] = useState(false);
//   const [currentBgIndex, setCurrentBgIndex] = useState(0);


//   const { dispatch } = useAuthContext();



//   const bgImages = [ad1, ad2, ad3];


//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
//     }, 15000); // Change image every 5 seconds

//     return () => clearInterval(intervalId);
//   }, [bgImages.length]);

//   const currentBgImageUrl = bgImages[currentBgIndex];

//   const signup = async (username, password) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("http://localhost:4000/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ firstname, lastname, username,email, password,profilePicture }),
//       });

//       if (!response.ok) {
//         const json = await response.json();
//         throw new Error(json.error);
//       }

//       const json = await response.json();
//       localStorage.setItem("user", JSON.stringify(json));
//       dispatch({ type: "LOGIN", payload: json });

//       setRedirect(true);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleRegister = async (ev) => {
//     ev.preventDefault();
//     await signup(username, password);
//   };

//   const handleTransfer = () => {
//     setTransfer(true);
//   };

//   if (redirect) {
//     return <Navigate to="/login" />;
//   }

//   if (transfer) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <div className="boddy"
//     style={{
//       width: '100%',
//       height:'900px',
//       marginBottom: '-32%',
//       backgroundSize: 'cover',
//       // backgroundImage: `url(${require('../assets/cam.jpg')})`,
//         backgroundImage: `url(${currentBgImageUrl})`,
//         transition: 'background-image 1s cubic-bezier(0.25, 0.1, 0.25, 1)'
     

//     }}
//     >
// {/* ------------------------------------------------------------------- */}
//     <div className="reg-log">
//       <form className="register" onSubmit={handleRegister}>
//         <h1>Register</h1>
//         <input
//           type="text"
//           placeholder="Firstname"
//           value={firstname}
//           onChange={(event) => setFirstname(event.target.value)}
//         />



// <input
//           type="text"
//           placeholder="Lastname"
//           value={lastname}
//           onChange={(event) => setLastname(event.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//         />

// <input
//           type="text"
//           placeholder="Email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />

//        <input
//         type="file"
//         onChange={ev => setProfilePicture(ev.target.files)}
//       />
//         <button className="register-btn" disabled={isLoading}>Register</button>
//         <p>
//           Already a member?...{" "}
//           <button className="login-upload-btn" type="button" onClick={handleTransfer}>
//             Login
//           </button>
//         </p>
//         {error && <div className="error">{error}</div>}
//       </form>
//     </div>
//     </div>
//   );
// }









import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import ad1 from "../assets/headphone.jpg";
import ad2 from "../assets/camera.jpg";
import ad3 from "../assets/pexels-scottwebb-1029611.jpg";

export default function RegisterPage() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [transfer, setTransfer] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);


  const { dispatch } = useAuthContext();



  const bgImages = [ad1, ad2, ad3];


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 15000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [bgImages.length]);

  const currentBgImageUrl = bgImages[currentBgIndex];

  const signup = async (username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, username,email, password,profilePicture }),
      });

      if (!response.ok) {
        const json = await response.json();
        throw new Error(json.error);
      }

      const json = await response.json();
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });

      setRedirect(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (ev) => {
    ev.preventDefault();
    await signup(username, password);
  };

  const handleTransfer = () => {
    setTransfer(true);
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  if (transfer) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="boddy"
    style={{
      width: '100%',
      height:'900px',
      marginBottom: '-32%',
      backgroundSize: 'cover',
      // backgroundImage: `url(${require('../assets/cam.jpg')})`,
        backgroundImage: `url(${currentBgImageUrl})`,
        transition: 'background-image 1s cubic-bezier(0.25, 0.1, 0.25, 1)'
     

    }}
    >
{/* ------------------------------------------------------------------- */}
    <div className="reg-log">
      <form className="register" onSubmit={handleRegister}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={(event) => setFirstname(event.target.value)}
        />



<input
          type="text"
          placeholder="Lastname"
          value={lastname}
          onChange={(event) => setLastname(event.target.value)}
        />

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

<input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

      
        <button className="register-btn" disabled={isLoading}>Register</button>
        <p>
          Already a member?...{" "}
          <button className="login-upload-btn" type="button" onClick={handleTransfer}>
            Login
          </button>
        </p>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
    </div>
  );
}



