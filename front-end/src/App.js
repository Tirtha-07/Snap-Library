import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Register from './pages/Register';
import Login from './pages/Login';
import Upload from './pages/Upload'
import Otp from './pages/Otp'
import Otp2 from './pages/Otp2'



// import { UserContextProvider } from './components/UserContext';

import './App.css'


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Footer from './components/Footer';
import License from './pages/License';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import NewPassword from './pages/NewPassword';
// import Layout from './components/Layout';



function App() {
  return (
    <div>
              
        <Header />

        {/* <UserContextProvider> */}

        <Routes>
      {/* <Route path="/" element={<Layout />} /> */}
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/license" element={<License/>} />
        <Route path='/login' element={<Login/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp" element={<Otp/>} />
      <Route path="/otp2" element={<Otp2/>} />
      <Route path="/newemail" element={<NewPassword/>} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />




      {/* </Route> */}
        </Routes>
       

        <Footer />

         
    </div>
  );
}

export default App;

// ----------------------------------------------------------------------------------------------------


