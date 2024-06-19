// import { useState } from "react";
// import { useAuthContext } from "./useAuthContext";


// export const useSignup= () => {

//     const [error, setError] = useState(null);
//     const [isLoading, setIsLoading] = useState(null);
//     const { dispatch }= useAuthContext();


//     const signup= async(username, password)=> {

//         setIsLoading(true);
//         setError(null);

//         const response= await fetch("http://localhost:4000/auth/register", {

//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},

//             body: JSON.stringify({username, password})


//         })

//         const json= await response.json();

//         if(!response.ok){

//             setIsLoading(false);
//             setError(json.error);
//         }

//         if (response.ok){

//             localStorage.setItem('user', JSON.stringify(json));

//             dispatch({type: 'LOGIN', payload: json})

//            setIsLoading(false) 
//         }
//     }

//     return { signup, isLoading, error };
// }












// import { useState } from "react";
// import { useAuthContext } from "./useAuthContext";

// export const useSignup = () => {
//     const [error, setError] = useState(null);
//     const [isLoading, setIsLoading] = useState(false); // Corrected initialization value
//     const { dispatch } = useAuthContext();

//     const signup = async (username, password) => {
//         setIsLoading(true);
//         setError(null);

//         try {
//             const response = await fetch("http://localhost:4000/auth/register", {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ username, password })
//             });

//             if (!response.ok) {
//                 const json = await response.json();
//                 throw new Error(json.error);
//             }

//             const json = await response.json();
//             localStorage.setItem('user', JSON.stringify(json));
//             dispatch({ type: 'LOGIN', payload: json });
//         } catch (error) {
//             setError(error.message);
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     return { signup, isLoading, error };
// }
