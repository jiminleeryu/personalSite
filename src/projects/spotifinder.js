import React from 'react';

const SpotiFinder = () => {
    return (
        <div className="spotifinder-container">
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

export default SpotiFinder;