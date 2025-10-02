import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Home from './components/Home';
import Contact from './components/Contact';
import Career from './components/Career';
import About from './components/About';
import Splashscreen from './components/Splashscreen';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show splash screen for 3 seconds, then redirect to home
    const timer = setTimeout(() => {
      setShowSplash(false);
    },6000);

    return () => clearTimeout(timer);
  }, []);

  // Show splash screen on initial load
  if (showSplash) {
    return <Splashscreen />;
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
};
export default App;
