import React from 'react';
import { Header,Footer,About,Appointment,Facilities,Feedback, Newsandevents,Appointmentform } from './components';
import './App.css';
import './index.css';
import { BrowserRouter, Route,Routes, Switch } from "react-router-dom";



const App = () => {
  return (
   
    <div className="App">
    <div className="site__bg">
    
     

<Routes>

    <Route path="/appointment" element={[<Appointment/>,<Appointmentform/>]} />
    <Route path="/" element={[<Header/>,<About/>,<Facilities/>,<Newsandevents/>,<Feedback/>,<Footer/>]}  />
   
    

      </Routes>

 
     
   

    
    </div>
    </div>
  )
}

export default App
