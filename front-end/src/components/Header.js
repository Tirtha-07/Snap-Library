

// import { Link, useNavigate } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";
// import { useLogout } from "../hooks/useLogout";
// import { useEffect, useState } from "react";
// import logo from '../assets/logo-removebg-preview.png';

// const Header = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const { logout } = useLogout();
//     const { user } = useAuthContext();
//     const [isScrolled, setIsScrolled] = useState(false);
//     const navigate = useNavigate();

//     const handleScroll = () => {
//         const offset = window.scrollY;
//         if (offset > 50) {
//             setIsScrolled(true);
//         } else {
//             setIsScrolled(false);
//         }
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const handleLogout = () => {
//         logout();
//     };

//     const handleSearch = async (e) => {
//         e.preventDefault();
//         navigate(`/?search=${searchTerm}`);
//     };

//     return (
//         <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
//             <ul>
//                 <li>
//                     <img src={logo} className="new-logo" alt="logo" />
//                 </li>
//                 <li>
//                     <Link to="/"><i class="bi bi-house-door-fill"></i><b className="home-caption">Home</b></Link>
//                 </li>
//                 <li>
//                     <Link to="/about"><b>About Us</b></Link>
//                 </li>
//                 <li>
//                     <Link to="/license"><b>License</b></Link>
//                 </li>
//                 {!isScrolled && (
//                     <li>
//                         <form onSubmit={handleSearch} className="search-form">
//                             <input
//                                 type="text"
//                                 placeholder="Search..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 className="search-input"
//                             />
//                             <button type="submit" className="search-button">Go</button>
//                         </form>
//                     </li>
//                 )}
//                 {!user && (
//                     <>
//                         <li>
//                             <Link className="rite-side-register" to="/register">
//                                 <b>Register</b>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link className="rite-side-login" to="/login">
//                                 <b>Login</b>
//                             </Link>
//                         </li>
//                     </>
//                 )}
//                 {user && (
//                     <>
//                         <li>
//                             <Link className="rite-side-three" to="/profile">
//                                 <b><i class="bi bi-person-circle profile-icon"></i></b>
//                             </Link>
//                         </li>
//                         <li>
//                             <Link className="rite-side-one" to="/upload">
//                                 <b>Upload</b>
//                             </Link>
//                         </li>
//                         <li>
//                             <button className="rite-side-two" onClick={handleLogout}>
//                                 <b>Logout</b>
//                             </button>
//                         </li>
//                     </>
//                 )}
//             </ul>
//         </nav>
//     );
// };

// export default Header;







import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useEffect, useState } from "react";
import logo from '../assets/logo-removebg-preview.png';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

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

    const handleSearch = async (e) => {
        e.preventDefault();
        navigate(`/?search=${searchTerm}`);
    };

    return (
        <nav className={`navigation ${!isScrolled ? 'scrolled' : ''}`}>
            <ul>
                <li>
                    <img src={logo} className="new-logo" alt="logo" />
                </li>
                <li>
                    <Link to="/"><i class="bi bi-house-door-fill"></i><b className="home-caption">Home</b></Link>
                </li>
                <li>
                    <Link to="/about"><b>About Us</b></Link>
                </li>
                <li>
                    <Link to="/license"><b>License</b></Link>
                </li>
                {isScrolled && (
                    <li>
                        <form onSubmit={handleSearch} className="search-form">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                            {/* <button type="submit" className="search-button">Go</button> */}
                        </form>
                    </li>
                )}
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
                        <li className="dropdown">
                       <i class="bi bi-person-circle profile-icon"></i>

                        <div class="dropdown-content">
                            <p>
                            <Link  to="/profile">
                                <b>Profile</b>
                            </Link>
                             </p>

                             <p>
                            <button  onClick={handleLogout}>
                                <b className="logout-btn">Logout</b>
                            </button>
                            </p>
                        </div>

                           
                        </li>

                        <li>
                            <Link className="rite-side-one" to="/upload">
                                <b>Upload</b>
                            </Link>
                        </li>
                       
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Header;




