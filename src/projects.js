import React from 'react';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import  spotifinder_title from './images/spotifinder_jb.png'
import multiwii_schema_title from './images/multiserial_title.png'
import './styles/projects.css';
import './styles/global.css';

const Projects = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
          setVisible(true);
        }, 100); 
      }, []);
    
    useEffect(() => {
        const projectItems = document.querySelectorAll('.project-item');
        projectItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible'); // Add the visible class to trigger animation
            }, index * 200); // Delay each item slightly for a staggered effect
        });
    }, []);

  return (
    <div className="Projects">
        <header className="header">
        <div className="header-brand">
          <a aria-content="page" className="brand-link" href="/Home">Jimin Ryu</a>
        </div>
        <nav>
          <ul className="header-links">
            <li>
              <a aria-content="page" className="link" 
                href="/home">About</a>
            </li>
            <li>
              <a className="link-current" href="/projects">Projects</a>
            </li>
            <li>
              <a className="link" href="/resume">Resume</a>
            </li>
          </ul>
        </nav>
      </header>
      
        <div className="projects-container">
            <div className="project-item">
                <Link to="/projects/spotifinder">
                        <img src={spotifinder_title} alt="Spotifinder" className="project-image" />
                    <div className="project-text">
                        <h2 className="project-title">SpotiFinder</h2>
                        <p className="description-text-project">Music Recommendation/Searching Application, Full Stack | React/JS, Java</p>
                    </div>
                </Link>
            </div>

            <div className="project-item">
                <Link to="/projects/automarket">
                        <img src="path-to-your-image" alt="Automated Marketing System" className="project-image" />
                    <div className="project-text">
                        <h2 className="project-title">Automated Marketing System</h2>
                        <p>Brief description of Project 2.</p>
                    </div>
                </Link>
            </div>

            <div className="project-item">
                <Link to="/projects/flightcontroller">
                        <img src={multiwii_schema_title} alt="Flight Controller" className="project-image" />
                    <div className="project-text">
                        <h2 className="project-title">Cup Drone Controller</h2>
                        <p className="description-text-project">Android + Arduino Flight Controller Application | Kotlin/Java, C++</p>
                    </div>
                </Link>
            </div>

            <div className="project-item">
                <Link to="/projects/cnn">
                        <img src="path-to-your-image" alt="CNN" className="project-image" />
                    <div className="project-text">
                        <h2 className="project-title">Sugarbeet CV</h2>
                        <p>Brief description of Project 2.</p>
                    </div>
                </Link>
            </div>
        </div>

        <footer className="footer">
                <p>© 2024 Jimin Ryu</p>
            <div className="social-icons-container-footer">
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
        </footer>
    </div>
  );
};

export default Projects;