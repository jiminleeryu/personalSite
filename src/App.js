import './App.css';
import picture from "./images/headshot.png";
import koreaPicture from "./images/JiminAndGrandma.png"
import { useEffect, useState } from 'react';


function App() {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 100); 
  }, []);

  // Function to copy email to clipboard
  const copyToClipboard = () => {
    const email = "jimin_ryu@brown.edu";
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset notification after 2 seconds
  };

  // Function to scroll to another section
  const scrollToSection = () => {
    const section = document.getElementById('next-section');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header-brand">
          <a aria-content="page" className="brand-link" href="/about">Jimin Ryu</a>
        </div>
        <nav>
          <ul className="header-links">
            <li>
              <a aria-content="page" className="link-current" href="/about">About</a>
            </li>
            <li>
              <a className="link" href="/projects">Projects</a>
            </li>
            <li>
              <a className="link" href="/resume">Resume</a>
            </li>
          </ul>
        </nav>
      </header>
      
      <div className={`main-container fade-in ${visible ? 'visible' : ''}`}>
        <div className="content-container">
          <img src={picture} alt="Profile Picture" className="profile-pic"/>
          <div>
            <h1 className="open-sans-header">
              Hello! I'm Jimin.
            </h1>
            <h2>
              Welcome to my personal site and thank you for visiting!
              <br/>
            </h2>
            <h5>
              Get in touch <span className="emoji-large"> 👉 </span> 
              <span 
                className="email-clickable" 
                onClick={copyToClipboard}
                role="button"
              >
                 jimin_ryu@brown.edu
              </span>
            </h5>
            {copied && <p className="copied-notification-overlay">Copied to Clipboard!</p>}
          </div>
        </div>
          <div className="arrow-container">
            <i onClick={scrollToSection} aria-hidden="true" className="fa-solid fa-angles-down arrow-icon"></i>
        </div>
      </div>

      {/* The next section */}
      <div id="next-section" className="next-section">
        <div className="next-section-header">
          <h3>About Me</h3>
          <p></p>
        </div>
        <div className="next-section-container">
            <img src={koreaPicture} alt="Jimin in Korea" className="jimin-in-korea"/>
          </div>
      </div>
    </div>
  );
}

export default App;