import React from 'react';
import '../styles/spotifinder.css'
import kendrick_high_score from "../images/kendrick_high_score.png"
import kendrick_low_score from "../images/kendrick_low_score.png"
import kendrick_drake from "../images/kendrick_drake.png"
import drake_mozart from "../images/drake_mozart.png"
import merge_chart from "../images/merge_chart.png"

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
            
            <div className="spotifinder-content-container">
                <div className="spotifinder-content-container-header">
                    <h1 className="content-title">SpotiFinder</h1>
                    <p className="spotifinder-description-text-project-subtitle">Music Recommendation/Searching Application, Full Stack | React/JS, Java 
                        <br/>
                    <a className='github-clickable' href="https://github.com/jiminleeryu/term-project-spotifinder" target="_blank"> <strong>GitHub</strong></a>
                    </p>
                </div>
                    

                <div className="content-container-detail">
                    <h2 className="spotifinder-subtitle">Overview:</h2>
                        <p className="spotifinder-description-text-project-detail">
                        I have a passion for music, both as a listener and a maker, but I find it difficult to find new artists that match my current taste. Out of curiosity, I wanted to find ways to discover these artists who are overshadowed by streaming algorithms.
                        <br/>
                        <br/>
                        Thinking about this problem, our team built SpotiFinder, a site that helps users discover new music through two distinct searching features: <strong>Popularity Search,</strong> filtering based on popularity, and <strong>Merge,</strong> to find artists by "merging" two other ones.
                        <br/>
                        <br/>
                        My responsibilities for this project are highlighted below!
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
                        <img className="spotifinder-image" src={kendrick_high_score}></img>
                        <div className="spotifinder-description-text-project-detail-caption"><p><em>When searching for <strong>Kendrick Lamar</strong> with a popularity score of <strong>88%</strong> (B+ level) we generated results of similar, high charting Hip-Hop artists.</em></p></div>
                        <img className="spotifinder-image" src={kendrick_low_score}></img>
                        <div className="spotifinder-description-text-project-detail-caption"><p><em>Meanwhile, when searching for <strong>Kendrick Lamar</strong> with a popularity score of <strong>67%</strong> (D+ level) we generated results of lesser known, older Hip-Hop artists according to today's media standards (but still just as good!)</em>
                        <br/>
                        <br/>
                        For our popularity search, I implemented a tree-like data structure that organizes artists using Spotify's Related Artists data, which is predefined for each artist on the platform. We used a recursive function that dynamically determines the number of API calls based on the specified popularity metric. The lower the artist's popularity, the deeper the search traverses into the tree.
                        </p></div>
                    
                    <div className="spotifinder-description-text-project-detail">
                            <div className="spotifinder-content-divider"></div>
                        <p>    
                        <br/>
                        <strong>Artist Merge:</strong> For our Merge feature, I first created a database of 3,000 artists that stores calculated artist discography data. To build this, I used the Spotify API to collect song information for the top five songs for a queried artist, having 13 attributes within each song, including tempo, acousticness, loudness, energy, etc. From here, I averaged the attributes across all five top songs, and then applied scale normalization to store each of these values between 0 and 1. 
                        <br/>
                        <br/>
                        </p>
                    </div>
                    
                    <img className="spotifinder-image" src={kendrick_drake}></img>
                    <div className="spotifinder-description-text-project-detail"><p>
                        <em>Using Kendrick Lamar and Drake, two well renowned hip-hop artists, we get returned a result of artists of similar level.</em>
                        </p>
                        <br/>
                        <br/>
                        To complete the "merge," we averaged the calculated discography data of the two queried artists and searched for a third artist that best matched the combined average using a <strong>K-Nearest Neighbors (KNN)</strong> algorithm, where we return the artist with the smallest Euclidean distance.
                        <br/>
                        <br/>
                        <strong>What if we merge two unrelated artists?</strong>
                        <br/>
                        </div>
                    <img className="spotifinder-image" src={drake_mozart}></img>
                    <div className="spotifinder-description-text-project-detail"><p>
                        Combining Hip-Hop/Pop artist Drake, and Mozart, a classical composer, we get returned Pink Floyd, a progressive/psychedelic rock artist. However, we can verify its accuracy when we utilize a visualization chart of the artists and their discography attributes:
                    </p>
                    <br/>
                    </div>
                    <img className="spotifinder-image" src={merge_chart}></img>

                    <div className="spotifinder-description-text-project-detail"><p>
                        <em>The green data points (Pink Floyd) lie inbetween the red (Drake) and blue (Mozart), particularly with stronger attributes such as Instrumentalness and Acousticness that separate the two merged artists' styles. </em>
                    </p>
                    </div>
                    <div className="spotifinder-content-divider"></div>
                    <br/>
                    <h2 className="spotifinder-subtitle">
                        Final Thoughts:
                    </h2>
                    <div className="spotifinder-description-text-project-detail">
                        <p>
                        This was my first time working on a full-stack application from scratch, but having so much creative freedom, this was exciting! I'm eager to tackle more similar projects in the future. 
                        <br/>
                        <br/>
                        Building the project has really shown my weaknesses and my growth. I struggled to build homepages and tables just a year ago, but now I can build an entire application in that time. 
                        <br/>
                        <br/>
                        <strong>I'm constantly learning with each project.</strong> Working with Spotify's API for visual displays and back end processes was fascinating, and tackling the unexpected challenges along the way were valuable learning experiences that contributed to my growth as a developer.
                        <br/>
                        <br/>
                        <strong>Working with my team was a valuable experience.</strong> Through discussions on features like personalized recommendations, I gained a deeper appreciation for clear communication and thorough planning. It truly showed that four minds are better than one!
                        <br/>   
                        <br/>
                        </p>
                    </div>
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

export default SpotiFinder;