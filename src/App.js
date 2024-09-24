import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './projects.js'; 
import Resume from './resume.js';
import Home from './home.js';
import Spotifinder from './projects/spotifinder.js'
import Automarket from './projects/automarket.js'
import FlightController from './projects/flightcontroller.js'
import Cnn from './projects/cnn.js'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/spotifinder" element={<Spotifinder />} />
          <Route path="/projects/automarket" element={<Automarket />} />
          <Route path="/projects/flightcontroller" element={<FlightController />} />
          <Route path="/projects/cnn" element={<Cnn />} />
        <Route path="/resume" element={<Resume />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;