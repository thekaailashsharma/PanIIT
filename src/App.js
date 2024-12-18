// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero/index';
import PastEditions from './components/PastEditions';
import WhatIs from "./components/WhatIs";
import WhyJoin from "./components/WhyJoin";
import NextEvent from "./components/NextEvent";
import Panelists from "./components/Panelists";
import PoweredBy from "./components/PoweredBy";
import Testimonials from "./components/Testimonials";
import Community from "./components/Community";
import Events from './components/Events';
import About from './components/About';
import OurPartners from "./components/OurPartners"
import "./index.css";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero/>
            <WhatIs />
            <WhyJoin />
            <NextEvent />
            <Panelists />
            <PoweredBy />
            <Testimonials />
            <Community />
            <OurPartners />
          </>
        } />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/traders-brawl">
          {/* Your Traders Brawl Component */}
        </Route>
        <Route path="/reserve">
          {/* Your Reserve Component */}
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;