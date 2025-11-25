import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import WhyAPAC from './components/WhyAPAC';
import AboutProgram from './components/AboutProgram';
import WhoShouldApply from './components/WhoShouldApply';
import FocusTracks from './components/FocusTracks';
import ProgramJourney from './components/ProgramJourney';
import WhatTeamsGet from './components/WhatTeamsGet';
import Partners from './components/Partners';
import ReadyToApply from './components/ReadyToApply';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhyAPAC />
      <AboutProgram />
      <WhoShouldApply />
      <FocusTracks />
      <ProgramJourney />
      <WhatTeamsGet />
      <Partners />
      <ReadyToApply />
      <FAQs />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
