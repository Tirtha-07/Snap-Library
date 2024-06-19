



// import { useState } from "react";
// import { Navigate } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";

// export default function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [redirect, setRedirect] = useState(false); 
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
  
//   const { user, dispatch } = useAuthContext();

//   const login = async (username, password) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("http://localhost:4000/auth/login", {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password })
//       });

//       if (!response.ok) {
//         const json = await response.json();
//         throw new Error(json.error);
//       }

//       const json = await response.json();
//       localStorage.setItem('user', JSON.stringify(json));
//       dispatch({ type: 'LOGIN', payload: json });

//       setRedirect(true);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSubmit = async (ev) => {
//     ev.preventDefault();
//     await login(username, password);
//   };

//   if (redirect || user) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div className="reg-log">
//       <form className="login" onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(event) => setUsername(event.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//         <button className="login-btn" disabled={isLoading}>Login</button>
//         {error && <div className="error">Wrong credentials!!</div>}
//       </form>
//     </div>
//   );
// }






import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import ad1 from "../assets/headphone.jpg";
import ad2 from "../assets/camera.jpg";
import ad3 from "../assets/pexels-scottwebb-1029611.jpg";


export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);


  const { user, dispatch } = useAuthContext();

  const bgImages = [ad1, ad2, ad3];


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 10000); 

    return () => clearInterval(intervalId);
  }, [bgImages.length]);

  const currentBgImageUrl = bgImages[currentBgIndex];

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:4000/auth/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        const json = await response.json();
        throw new Error(json.error);
      }

      const json = await response.json();
      
      // Set user data to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // Dispatch the login action with user data
      dispatch({ type: 'LOGIN', payload: json });

      // Redirect to home page
      setRedirect(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await login(username, password);
  };

  if (redirect || user) {
    return <Navigate to="/" />;
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
        transition: 'background-image 1s cubic-bezier(0.25, 0.1, 0.25, 1)',

        
     

    }}
    >
    <div className="reg-log">
      <form className="login" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button className="login-btn" disabled={isLoading}>Login</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
    </div>

  );
}

