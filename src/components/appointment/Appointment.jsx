import React from 'react';
import './appointment.css';
import Header from '../header/Header';
import appointment from '../../assets/appointment.jpg';
import { NavLink } from 'react-router-dom';
import Appointmentform from '../appointmentform/Appointmentform';

const Appointment = () => {
  return (
    <div>
      <Header></Header>
      <NavLink className="back_btn"
                            to="/">BackHome</NavLink>
      <div className='health_img'>
<img src={appointment}  alt="appointmentimg"/>
</div>

    </div>
  )
}

export default Appointment
