import React from 'react';
import './header.css';
import logo from '../../assets/logo.jpg'

const Header = () => {
  return (
    <div className='health__navbar'>
    <div className='health__logo'>
     <img src={logo} alt="logo"/>
    </div>
    <div className='health__container'>
   
  
    <p><h1 className='heading'>Praveen’s Heart Care
   </h1>
   <br/>
   <p>No. 9, Appavu Street, Udumalaipettai, Tamil Nadu 642126, India</p>
    </p>
    <p className='gmail_txt'>phc@gmail.com
 
   <br/>
  
   <p>
  
   +919887977777

   </p>
    </p>
   
    </div>
    </div>
  )
}

export default Header
