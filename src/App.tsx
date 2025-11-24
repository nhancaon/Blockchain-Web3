import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Programs from './components/Programs';
import Portfolio from './components/Portfolio';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Apply from './components/Apply';
import Footer from './components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#0b0b0b]">
      <Hero />
      <Stats />
      <Programs />
      <Portfolio />
      <Partners />
      <Testimonials />
      <Apply />
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
