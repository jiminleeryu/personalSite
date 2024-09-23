import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useState, useEffect } from 'react';
import './styles/resume.css';
import './styles/global.css';

const Resume = () => {
    return (
        <div className="Resume">
            <header className="resume-header">
                <div className="header-brand">
                    <a aria-content="page" className="brand-link" href="/Home">Jimin Ryu</a>
                </div>
                <nav>
                    <ul className="header-links">
                        <li>
                            <a aria-content="page" className="link" href="/home">About</a>
                        </li>
                        <li>
                            <a className="link" href="/projects">Projects</a>
                        </li>
                        <li>
                            <a className="link-current" href="/resume">Resume</a>
                        </li>
                    </ul>
                </nav>
            </header>
      
            <div className="resume-container">
                <iframe 
                    src="/JIMIN_RYU_RESUME.pdf" 
                    width="100%" 
                    height="100%" 
                    title="JIMIN RYU RESUME"
                    class="resume-iframe">
                </iframe>
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

export default Resume;