
// import { Link } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";
// import { useLogout } from "../hooks/useLogout";
// import { useEffect, useState } from "react";
// import  logo  from '../assets/logo-removebg-preview.png'

// const Header = () => {
//     const { logout } = useLogout();
//     const { user } = useAuthContext();
//     const [isScrolled, setIsScrolled] = useState(false);

//   const handleScroll = () => {
//     const offset = window.scrollY;
//     if (offset > 50) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);


//     const handleLogout = () => {
//         logout();
//     };

//     return (
    

//     <nav className={`navigation ${!isScrolled ? 'scrolled' : ''}`}>
//     <ul>
//       <li>
//         <img src={logo} className="new-logo" alt="logo" />
//       </li>
//       <li>
//         <Link to="/"><b>Home</b></Link>
//       </li>
//       <li>
//         <Link to="/about"><b>About Us</b></Link>
//       </li>
//       <li>
//         <Link to="/license"><b>License</b></Link>
//       </li>
//       {!user && (
//         <>
//           <li>
//             <Link className="rite-side-register" to="/register">
//               <b>Register</b>
//             </Link>
//           </li>
//           <li>
//             <Link className="rite-side-login" to="/login">
//               <b>Login</b>
//             </Link>
//           </li>
//         </>
//       )}
//       {user && (
//         <>


//            <li>
//             <Link className="rite-side-three" to="/profile">
//               <b>Profile</b>
//             </Link>
//           </li>

//           <li>
//             <Link className="rite-side-one" to="/upload">
//               <b>Upload</b>
//             </Link>
//           </li>
//           <li>
//             <button className="rite-side-two" onClick={handleLogout}>
//               <b>Logout</b>
//             </button>
//           </li>
//         </>
//       )}
//     </ul>
//   </nav>

//     );
// };

// export default Header;




import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useEffect, useState } from "react";
import logo from '../assets/logo-removebg-preview.png';

const Header = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogout = () => {
        logout();
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search Query: ", searchQuery);
        // Implement search functionality here
    };

    return (
        <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
            <ul>
                <li>
                    <img src={logo} className="new-logo" alt="logo" />
                </li>
                <li>
                    <Link to="/"><b>Home</b></Link>
                </li>
                <li>
                    <Link to="/about"><b>About Us</b></Link>
                </li>
                <li>
                    <Link to="/license"><b>License</b></Link>
                </li>
                <li>
                    <form onSubmit={handleSearch} className="search-form">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                        <button type="submit" className="search-button"></button>
                    </form>
                </li>
                {!user && (
                    <>
                        <li>
                            <Link className="rite-side-register" to="/register">
                                <b>Register</b>
                            </Link>
                        </li>
                        <li>
                            <Link className="rite-side-login" to="/login">
                                <b>Login</b>
                            </Link>
                        </li>
                    </>
                )}
                {user && (
                    <>
                        <li>
                            <Link className="rite-side-three" to="/profile">
                                <b>Profile</b>
                            </Link>
                        </li>
                        <li>
                            <Link className="rite-side-one" to="/upload">
                                <b>Upload</b>
                            </Link>
                        </li>
                        <li>
                            <button className="rite-side-two" onClick={handleLogout}>
                                <b>Logout</b>
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Header;
