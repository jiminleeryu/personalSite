import React from 'react';
import { useState, useEffect} from 'react';
import './styles/projects.css';
import './styles/global.css';

const Projects = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
          setVisible(true);
        }, 100); 
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
      
    </div>
  );
};

export default Projects;