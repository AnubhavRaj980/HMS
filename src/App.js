import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import LandingPage from './Components/Pages/First_Page'
import Beforelogup from './Components/Auth/Beforelogup';
import FirstPage from './Components/WithNavbarPages/FirstPage';
import Afterlogup from './Components/Auth/Afterlogup';
import Question from './Components/Auth/Question';
import {AverageMarksProvider} from './Components/WithNavbarPages/AverageMarksContext'
import ContactUs from './Components/Contact/ContactUs';
import About from './Components/About/About';
import Profile from './Components/Profile/Profile';
import Thank from './Components/Auth/Thank';

function App() {
  return (
    <Router>
      <AverageMarksProvider>
         <div>
      <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/FirstPage" element={<FirstPage/>}></Route>
        <Route path="/beforelogup" element={<Beforelogup/>}></Route>
        <Route path="/afterlogup" element={<Afterlogup/>}></Route>
        <Route path="/question" element={<Question/>}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/thank" element={<Thank/>}></Route>
      </Routes>
    </div>
      </AverageMarksProvider>
   
    </Router>
  );
}

export default App;
