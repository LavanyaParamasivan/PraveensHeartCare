import React from 'react';
import './newsandevents.css';
import heartcareimg from '../../assets/heartcareimg.png';
import news from '../../assets/news.jpg';

const Newsandevents = () => {
  return (
    <div>
     <div className='health_facilities'>
      <div className='health_aboutmsg'>
      <p className='meet_txt'>
     
     <h2>News & Events</h2>
   
 </p>
 <br/>
      </div>
    

     </div>
     <div className='back_align'>
      </div>
     <div className='backgrnd_clr'>
      <div className='card_clr'>

  <div class="card">
  <img src={heartcareimg}  alt="heartcareimg" />

</div>
</div>
<div className='card_clr'>

  <div class="card">
  <img src={news}  alt="news" />

</div>
</div>
     </div>
    </div>
  )
}

export default Newsandevents
