
// import { useState } from "react";
// import { Navigate } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";

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
//   );
// }










import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

export default function RegisterPage() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [transfer, setTransfer] = useState(false);

  const { dispatch } = useAuthContext();

  const signup = async (username, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstname, lastname, username,email, password }),
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
  );
}





