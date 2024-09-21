import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import Calendar from 'react-calendar';
import  './appointmentform.css'

const Appointmentform = () => {
    const [name,SetName] = useState('');
    const [mobile,SetMobile] = useState('');
    const [date, setDate] = useState(new Date());
    // const dispatch = useDispatch();

    // const register =()=>{
    //     dispatch({})
    // }
  return (
    <>
   <div className='health_facilities'>
      <div className='health_aboutmsg'>
      <p className='meet_txt'>
     
     <h2>Appointment Details</h2>
   
 </p>
 <br/>
      </div>
      </div>
    <form className='booking'>
        <span className='label'>Name</span>
       <input type="text" placeholder='Name' value={name} onChange={e=>SetName(e.target.value)}/>
       <span className='label_second'>Mobile No</span>
       <input type="text" placeholder='Mobile No' value={mobile} onChange={e=>SetMobile(e.target.value)}/>
       <span className='label_third'>Date Of Appointment</span>
       <div className='calendar-container'>
      
       <Calendar  onChange={setDate} value={date} />
       </div>
    
    <button className='book_btn'>Book</button>
     
    </form>
    </>
  )
}

export default Appointmentform
