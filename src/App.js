// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import PastEditions from './components/PastEditions';
// import WhatIs from './components/WhatIs';
// import WhyJoin from './components/WhyJoin';
// import NextEvent from './components/NextEvent';
// import Panelists from './components/Panelists';
// import PoweredBy from './components/PoweredBy';
// import Testimonials from './components/Testimonials';
// import Community from './components/Community';
// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Hero />
      <PastEditions />
      {/*<WhatIs />*/}
      {/*<WhyJoin />*/}
      {/*<NextEvent />*/}
      {/*<Panelists />*/}
      {/*<PoweredBy />*/}
      {/*<Testimonials />*/}
      {/*<Community />*/}
      {/*<Footer />*/}
    </Router>
  );
}

export default App;