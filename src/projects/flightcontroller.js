import React from 'react';
import '../styles/spotifinder.css'
import multiwii_schema_title from '../images/multiserial_title.png'

const FlightController = () => {
    return(
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
            
                <div className="spotifinder-content-container">
                    <div className="spotifinder-content-container-header">
                        <h1 className="content-title">Phone UAV Controller</h1>
                        <p className="spotifinder-description-text-project-subtitle">Android + Arduino Flight Controller Application | Kotlin/Java, C++ 
                            <br/>
                        <a className='github-clickable' href="https://github.com/jiminleeryu/FlightController" target="_blank"> <strong>GitHub</strong></a>
                        </p>
                    </div>
                    

                <div className="content-container-detail">
                    <h2 className="spotifinder-subtitle">Overview:</h2>
                        <p className="spotifinder-description-text-project-detail">
                        
                        <br/>
                        <br/>

                        <br/>
                        <br/>
                        </p>
                    <h2 className="spotifinder-subtitle">
                        Authorization:
                    </h2>
                        <p className="spotifinder-description-text-project-detail">
                        <strong>Spotify OAuth: </strong> Since Spotifinder centers around the Spotify API, users can log in and sync their Spotify account.
                        <br/>
                        <br/>
                        I chose Spotify's <em>PKCE (Proof Key for Code Exchange)</em> flow to avoid storing sensitive client info, reducing exposure risk. SpotiFinder generates a secure code challenge from a random code verifier, then redirects users to Spotify’s authorization page for login and permissions. After authorization, the app exchanges the code and credentials for an access token. 
                        <br/>
                        <br/>
                        Additionally, I implemented hourly expiring cookies for access tokens, reducing the need for repeated logins and enhancing security with a new verifier and challenge for each session.
                        <br/>
                        <br/>
                    <div className="spotifinder-content-divider"></div>
                        <br/>
                    <h2 className="spotifinder-subtitle-tech">
                        Technical Features:
                    </h2>
                    <br/>
                        <strong>Search By Popularity: </strong> Users can filter and search artists by popularity, and our site returns three artists with three songs each. The popularity scale follows a grading system (e.g., 100% = A+, 80% = B-, 50% = F). <br/> 
                        
                    </p>
                        <div className="spotifinder-description-text-project-detail-caption"><p><em>When searching for <strong>Kendrick Lamar</strong> with a popularity score of <strong>88%</strong> (B+ level) we generated results of similar, high charting Hip-Hop artists.</em></p></div>
                        <div className="spotifinder-description-text-project-detail-caption"><p><em>Meanwhile, when searching for <strong>Kendrick Lamar</strong> with a popularity score of <strong>67%</strong> (D+ level) we generated results of lesser known, older Hip-Hop artists according to today's media standards (but still just as good!)</em>
                        <br/>
                        <br/>
                        For our popularity search, I implemented a tree-like data structure that organizes artists using Spotify's Related Artists data, which is predefined for each artist on the platform. We used a recursive function that dynamically determines the number of API calls based on the specified popularity metric. The lower the artist's popularity, the deeper the search traverses into the tree.
                        </p></div>
                    
                    <div className="spotifinder-content-divider"></div>
                    <br/>
                    <h2 className="spotifinder-subtitle">
                        Final Thoughts:
                    </h2>
                    
                </div>
            </div>
                

            <footer className="footer">
                    <p>© 2024 Jimin Ryu</p>
                <div className="social-icons-container-footer">
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

export default FlightController;