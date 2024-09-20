import React from 'react';
import './facilities.css';
import ecg from '../../assets/ecg.png';
import echo from '../../assets/echo.png';
import TMT from '../../assets/TMT.png';
import Lab from '../../assets/Lab.png';
import masterhealthcheck from '../../assets/masterhealthcheck.png';



const Facilities = () => {
  return (
    <div>
    
     <div className='health_facilities'>
      <div className='health_aboutmsg'>
      <p className='meet_txt'>
     
     <h2>Our Facilities</h2>
   
 </p>
 <br/>
      </div>
    

     </div>
     
 <div  className='facilities_images'>
 <div className="flex-container">
  <div className=' imganim' >
  <p>
  <img src={ecg} alt="ecg" /><br/>
  <p className='img_tag'>ECG</p>
    </p>
  </div>
  <div className=' imganim'>
  <p>
  <img src={echo} alt="echo" /><br/>
  <p  className='img_tag'>Echo Scan</p>
    </p>
  </div>
  <div className=' imganim'>
  <p>
  <img src={TMT} alt="TMT" /><br/>
  <p  className='img_tag'>TMT</p>
    </p>
  </div>
  <div className=' imganim'>
  <p>
  <img src={Lab} alt="Lab" /><br/>
  <p  className='img_tag'>Lab</p>
    </p>
  </div>
  <div className=' imganim' >
  <p>
  <img src={masterhealthcheck} alt="masterhealthcheck" />
  <br/>
  <p  className='img_tag'>Master Health Checkup</p>
    </p>
  </div>
</div>
  
   
   
  
  

 </div>
    </div>
  )
}

export default Facilities
