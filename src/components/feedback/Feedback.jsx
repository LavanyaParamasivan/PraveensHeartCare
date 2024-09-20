import React from 'react';
import './feedback.css';
import { FaStar } from "react-icons/fa";

const Feedback = () => {
  return (
    <div>

     <div className='health_facilities'>
      <div className='health_aboutmsg'>
      <p className='meet_txt'>
     
     <h2>Testimonials</h2>
   
 </p>
 <br/>
      </div>
    

     </div>
     <section id="testimonials">
     <div className='testimonials-box-container'>
      <div className='testimonials-box'>
      <div className='box-top'>
        <div className='profile'>
          <div className='name-user'>
<strong>
  Liju Antony
</strong>
          </div>

        </div>
        <div className='reviews'>
     
          <FaStar />
      
    
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>


     </div>
     <div className='client-comments-less'>
<p>Very knowledgeable and humble doctor.. very approachable and considerate.. one of best doctors I ever came across.. highly recommended. </p>
     </div>
     </div>
     <div className='testimonials-box'>
      <div className='box-top'>
        <div className='profile'>
          <div className='name-user'>
<strong>
Nida Syeda
</strong>
          </div>

        </div>
        <div className='reviews'>
        
          <FaStar />
        
    
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>


     </div>
     <div className='client-comments'>
<p>Been consulting for my dad for sometime now. Doctor is extremely kind and patient and has immense knowledge in not only cardiology but nephrology and GI related areas. He has offered a lot of help to help my father heal. I'm extremely grateful for all the help. He really cares abt his patients</p>
     </div>
     </div>
     <div className='testimonials-box'>
      <div className='box-top'>
        <div className='profile'>
          <div className='name-user'>
<strong>
Mahalakshmi R Menon
</strong>
          </div>

        </div>
        <div className='reviews'>
          <i>
          <FaStar />
          </i>
    
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>


     </div>
     <div className='client-comments'>
<p>
 
 Hands down, Dr. Praveen Raja is the best doctor in town in his speciality. He listens to our queries very patiently and explains the treatment plan in detail. Clinic is very clean and well maintained and also equipped with inhouse Echo, ECG and TMT machines. Will surely recommend Dr Praveen Raja for a prompt diagnosis and treatment.</p>
     </div>
     </div>
     <div className='testimonials-box'>
      <div className='box-top'>
        <div className='profile'>
          <div className='name-user'>
<strong>
Raghavi Basker
</strong>
          </div>

        </div>
        <div className='reviews'>
         
          <FaStar />
          
    
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>


     </div>
     <div className='client-comments'>
<p>A veteran in the field of cardiology, he is one of the most brilliant and considerate doctors in the country. Goes out of his way to ensure a patient's well being. Very approachable and affable, his knowledge and diagnos is unparalleled. I have recommended him to all my friends in search of a good cardiologist and they have benefitted greatly too.</p>
     </div>
     </div>
     </div>
     
     </section>
     
    </div>
  )
}

export default Feedback
