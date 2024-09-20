import React from 'react';
import { Header,Footer,About,Appointment,Facilities,Feedback, Newsandevents } from './components';
import './App.css';
import './index.css';


const App = () => {
  return (
    <div className="App">
    <div className="site__bg">
      <Header>
</Header>
   
    <About></About>
    <Facilities></Facilities>
    <Newsandevents>
     
    </Newsandevents>
    <Feedback></Feedback>
    <Footer></Footer>
    </div>
    </div>
  )
}

export default App
