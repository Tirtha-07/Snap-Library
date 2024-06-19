import React from 'react'
import  logo  from "../assets/logo-removebg-preview.png";

const Footer = () => {
  return (
    <div className="footer">

    
     <img className='new-logo-two' src={logo} alt="" />


    <p className="footer-mini-title">Over 4.6 million+ high quality stock images, videos and music shared by our talented community.
</p>


  <div className="icons">

  <i class="bi bi-instagram"></i>
  <i class="bi bi-twitter-x"></i>
  <i class="bi bi-facebook"></i>
  <i class="bi bi-pinterest"></i>
    
</div>

{/* --------------------------------------------------------------------------------------- */}
<div className='footer-right'>

  <p className='xd'><b>Discover</b></p>
  <p className='footer-details'>Editor's Choice<br/>Curated collections<br/>Popular images<br/>Best artists<br/>Popular stuff<br/>Exciting offers</p> 

</div>


<div className='footer-right-two'>

  <p className='xd'><b>Community</b></p>
  <p className='footer-details'>Blogs<br/>Camera<br/>Creators<br/>Forum</p> 

</div>


<div className='footer-right-three'>

  <p className='xd'><b>About us</b></p>
  <p className='footer-details'>About us<br/>License<br/>Summary<br/>Report content<br/>Privacy policy<br/>Cookies policy<br/>API<br/>Digital services</p> 

</div>

{/* ----------------------------------------------------------------------------------------------- */}

</div>

  )
}

export default Footer