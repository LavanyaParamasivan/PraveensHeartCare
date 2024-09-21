import { Component } from 'react';
import React from 'react';
import './footer.css';

const props ={

}
const Footer = () => {
  
  return (
   
      
      <div className='footer_bg'>
 <div className='consultation'>
  <p>
  Consultation Hours:<br/>
Monday - Saturday<br/>
9:30 AM - 2:30 PM,<br/> 6 PM - 9 PM<br/>
Sunday - Closed<br/>
  </p>
 </div>
<div className='map_google'>
<iframe id="map" width="50%" height="100" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20No.%209,%20Appavu%20Street,%20Udumalaipettai,%20Tamil%20Nadu%20642126,%20India+(Praveen's%20Heartcare)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
 
</div>
      </div>
     

  )
}

export default Footer;
