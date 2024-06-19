import { useState } from "react";
import banner2 from  "../assets/banner2.jpg";
import { Navigate } from "react-router-dom";


function About(){

  const[transfer,setTransfer]= useState(false)

  function send(){

    setTransfer(true)
    
  }

  if(transfer){
    return <Navigate to="/upload" />
  }



    return(
        <div className="outer">
           <div className="banner">
        <img className="banner-img" src={banner2} alt="" />
        <p className="title2">Empowering Creators</p>
        <p className="mini-title2">
        Our platform serves as a great medium for passionate photographers to showcase their works to a very wide audience.
        </p>
      </div>

      <div className="main-body-about">



        <div className="heading1">
          <h1>About us</h1>
       </div>

       <div className="content1">
         SNAPLIBRARY provides high quality and completely free stock photos licensed under the SNAPLIBRARY license. All photos are nicely tagged, searchable and also easy to discover through our discover pages.
       </div>


       <div className="heading1">
          <h1>Photos</h1>
       </div>

       <div className="content1">
       We have hundreds of thousands free stock photos and every day new high resolution photos will be added. All photos are hand-picked from photos uploaded by our users or sourced from free image websites. We make sure all published pictures are high-quality and licensed under the SNAPLIBRARY license.
       </div>




       <div className="heading1">
          <h1>Photo Sources
</h1>
       </div>

       <div className="content1">
       Only free images from our community of photographers are added to our photo database. We constantly try to deliver as many high quality free stock photos as possible to the creatives who use our website.
       </div>


         
       <div className="heading1">
          <h1>Team</h1>
       </div>

       <div className="content1">
       SNAPLIBRARY is run by Bruno Joseph, Ingo Joseph and Daniel Frese. Bruno and Ingo co-founded SNAPLIBRARY together in 2014 and Daniel joined them in 2015.
       </div>

       <div className="heading1">
          <h1>Mission</h1>
       </div>

       <div className="content1">
       We help millions of designers, writers, artists, programmers and other creators to get access to beautiful photos that they can use freely which empowers them to create amazing products, designs, stories, websites, apps, art and other work. We call it: "Empowering Creators"
       </div>




       <div className="heading1">
          <h1>Contribute</h1>
       </div>

       <div className="content1">
       Upload your own pictures to support the SNAPLIBRARY community:<br></br>

       <br></br>  <button class="about-upload-btn" onClick={send}>Upload</button><br></br>


       <br></br>And don't forget to share, like and follow SNAPLIBRARY on Instagram, Facebook and Twitter ;


       </div>



      </div>
      
      </div>
    )
}

export default About;