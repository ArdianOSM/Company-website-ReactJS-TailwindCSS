import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Blogs from './components/pages/Blogs';
import BlueLine from './components/pages/BlueLine';
import WaterConcept from './components/pages/WaterConcept';
import Download from './components/pages/Download';
import Enviroment from './components/pages/Enviroment';
import GreenLine from './components/pages/GreenLine';
import History from './components/pages/History';
import HousingSolution from './components/pages/HousingSolution';
import Job from './components/pages/Job';
import WhiteLine from './components/pages/WhiteLine';
import Philosophy from './components/pages/Philosophy';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Homepage />}/>
        <Route path="/about" element ={<About />}/>
        <Route path="/services" element ={<Services />}/>
        <Route path="/blogs" element ={<Blogs />}/>
        <Route path="/contact" element ={<Contact />}/>
        <Route path="/WaterConcept" element ={<WaterConcept/>}/>
        <Route path="/Download" element ={<Download />}/>
        <Route path="/Enviroment" element ={<Enviroment />}/>
        <Route path="/GreenLine" element ={<GreenLine/>}/>
        <Route path="/History" element ={<History />}/>
        <Route path="/HousingSolution" element ={<HousingSolution />}/>
        <Route path="/Job" element ={<Job />}/>
        <Route path="/WhiteLine" element ={<WhiteLine />}/>
        <Route path="/BlueLine" element ={<BlueLine />}/>
        <Route path="/Philosophy" element ={<Philosophy />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
