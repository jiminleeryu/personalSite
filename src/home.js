import React from 'react';
import picture from './images/headshot.png'; 
import koreaPicture from './images/JiminAndGrandma.png';  
import jeju from './images/home_pfp.png'
import { useState, useEffect} from 'react';
import './styles/home.css';
import './styles/global.css'

const Home = () => {

const [visible, setVisible] = useState(false);
const [activeLink, setActiveLink] = useState(""); 

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 100); 
  }, []);

  useEffect(() => {
    const section = document.getElementById('next-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink("#next-section"); // Activate when section is visible
        } else {
          setActiveLink(""); // Deactivate when section is not visible
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Function to scroll to another section
  const scrollToSection = () => {
    const section = document.getElementById('next-section');
    section.scrollIntoView({ behavior: 'smooth' });
  };

  window.addEventListener('scroll', function() {
    const arrow = document.querySelector('.arrow-container');
    const scrollPos = window.scrollY;

    if (scrollPos > 100) {
        arrow.classList.add('fade-out-up');
        arrow.classList.remove('fade-in-down');
    } else {
        arrow.classList.add('fade-in-down');
        arrow.classList.remove('fade-out-up');
    }
});

  return (
    <div className="Home">
      <header className="header">
        <div className="header-brand">
          <a aria-content="page" className="brand-link" href="/home">Jimin Ryu</a>
        </div>
        <nav>
          <ul className="header-links">
            <li>
              <a aria-content="page" className={activeLink === "#next-section" ? "link-current" : ""} 
                href="#next-section">About</a>
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

      <div className={`main-container ${visible ? 'visible' : ''}`}>
        <div className="content-container">
            <img src={jeju} alt="Profile Picture" className="profile-pic"/>
          <div>
            <h1 className="open-sans-header">
              Hello! I'm Jimin.
            </h1>
            <h2>
              Welcome to my personal site and thank you for visiting!
              <br/>
            </h2>
            <h3>
              Get in touch <span className="emoji-large"> 👉 </span> 
                <a className="email-clickable" href="mailto:jimin_ryu@brown.edu" >jimin_ryu@brown.edu </a>
            </h3>     
          </div>
        </div>
            <div className="arrow-container">
                <i onClick={scrollToSection} aria-hidden="true" className="fa-solid fa-angles-down arrow-icon"></i>
            </div>
      </div>

      <div id="next-section" className="next-section">
          <h4 className="next-section-header">About Me</h4>
        <div className="next-section-container">
            <img src={koreaPicture} alt="Jimin in Korea" className="jimin-in-korea"/>
            <p className="description-text">Hi, my name is Jimin and I'm a student at <strong>Brown University</strong> studying Computer Science. <br/>
              <br/>
              I enjoy working on software and tackling problems that bring small seeds of ideas to life. 
              <br/>
              <br/>
              Currently, I'm a SWE intern at <a className='email-clickable' href="https://www.wingspans.com" target="_blank"><strong>Wingspans (Tech Stars '24)</strong></a> and a project manager for <a className='email-clickable' href="https://fullstackatbrown.github.io/website/" target="_blank"><strong>Full Stack @ Brown</strong></a>. My previous experiences included deep learning research at the <a className='email-clickable' href="https://www.uidaho.edu" target="_blank"><strong>University of Idaho</strong></a> and software development for <a className='email-clickable' href="https://vivo.brown.edu" target="_blank"><strong>Researchers @ Brown</strong></a>.
              <br/>
              <br/>
              Outside of coding, some of my hobbies include making music, playing golf, and basketball with friends!
            </p>
            <div className="social-icons-container">
            <a href="https://github.com/jiminleeryu" target="_blank" aria-label="GitHub">
                <i class="fab fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://linkedin.com/in/jryu0" target="_blank" aria-label="LinkedIn">
                <i class="fab fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="mailto:jimin_ryu@brown.edu" target="_blank" aria-label="Email">
                <i class="fas fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;