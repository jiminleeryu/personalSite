import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './projects.js';  // Import your components
import Resume from './resume.js';
import Home from './home.js';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;