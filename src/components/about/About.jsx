import React from 'react';
import about from '../../assets/about.jpg';
import '../about/about.css';
import { useNavigate } from 'react-router-dom';


const About = () => {
  const navigate = useNavigate();
  return (
  
<div>
<div className='health__about__content-btn'>

  <button  className='health_btn' onClick={() => navigate("/appointment")}>Book Appointment</button>

    

      </div>
      <div className='health_img'>
<img src={about}  alt="about"/>
</div>
<div className='health_aboutmsg'>
  <p className='meet_txt'>
     
      <h2>Meet Our Doctor</h2>
    
  </p>
  </div>
<div className='health_aboutmsg'>
 
<p className='about_desc'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
</p>
</div>
 
</div>
     
     
   

  )
}

export default About
