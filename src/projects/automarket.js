import React from 'react';
import '../styles/spotifinder.css'
import Transactional from '../images/transactional_template.png'

const Automarket = () => {
    return(
        <div className="spotifinder-container">
                <header className="header">
                    <div className="header-brand">
                    <a aria-label="page" className="brand-link" href="/Home">Jimin Ryu</a>
                    </div>
                    <nav>
                        <ul className="header-links">
                            <li>
                            <a aria-label="page" className="link" 
                                href="/home">About</a>
                            </li>
                            <li>
                            <a className="link-current" href="/projects">Projects</a>
                            </li>
                            {/* <li>
                            <a className="link" href="/resume">Resume</a>
                            </li> */}
                        </ul>
                    </nav>
                </header>

                <div className="spotifinder-content-container">
                    <div className="spotifinder-content-container-header">
                        <h1 className="content-title">Marketing System</h1>
                        <p className="spotifinder-description-text-project-subtitle">Automated Email Communications, Full Stack | JavaScript, CosmicJS, NoSQL 
                            <br/>
                        <a className='github-clickable' href="https://wingspans.com" target="_blank" rel="noopener noreferrer"> <strong>Website</strong></a>
                        </p>
                    </div>
                    

                <div className="content-container-detail">
                    <h2 className="spotifinder-subtitle">Overview:</h2>
                        <p className="spotifinder-description-text-project-detail">
                        <strong>Wingspans</strong> is an EdTech startup focusing on career building by providing personalized career development tools and resources for nontraditional learners. Some resources that we offer include career stories, resume builders, and a tailored portfolio designer, along with a gamification strategy to award user activity. The platform currently serves over 50,000 users across more than 35 schools, and is backed by the <a className='github-clickable-embed' href="https://www.linkedin.com/feed/update/urn:li:activity:7203809220067016704/" target="_blank" rel="noopener noreferrer"><strong>Techstars (24)</strong></a> accelerator program. 
                        <br/>
                        <br/>
                        We are continually testing new strategies to boost user engagement and retention. I was tasked with improving engagement through email communication, and to achieve this, I developed an automated marketing system that uses user activity data to encourage site engagement and career development.
                        </p>
                    <h2 className="spotifinder-subtitle">
                        Features:
                    </h2>
                        <p className="spotifinder-description-text-project-detail">
                        <strong>Transactional messages: </strong>I drew inspiration from platforms like Udemy and Duolingo, which use personalized, easy-to-read emails with progress metrics to motivate users. Based on this research, I created similar templates to be sent using the Brevo API.
                        </p>

                        <img className="spotifinder-image" src={Transactional} alt="Transactional email template screenshot"></img>
                        <div className="spotifinder-description-text-project-detail-caption"><p>
                            I created a function to generate and store contact details—such as first name, last name, email, user ID, and school—in Firestore. Next, I developed a function to send a simple transactional email (to prevent soft bouncing) to new users, including custom link generation that directs them to a personalized personality assessment under their unique subdomain.
                            <br/>
                            <br/>
                            </p></div>

                        <p className="spotifinder-description-text-project-detail">
                        <strong>Weekly Updates: </strong> I created a script to send personalized weekly emails to our active users, featuring progress reports that highlight each user's activity during the week, and including potential careers that the user may be interested to explore which I derived using a custom prediction model. These emails would include the amount of points a user has gained throughout the week, and their total score, along with the level that they are at. Each email also features a set of weekly emails that are rotated every week, custom designed to feature stories that the user will most likely interact with. 
                        </p>

                        <p className="spotifinder-description-text-project-detail">
                        <strong>Challenges with testing in C++ and how I navigated them: </strong> <br/><br/>
                        <em>Byte Ordering:</em> I ensured I was converting values to the correct endianness before sending data in MSP packets and converting them back when receiving them to verify accurate communication between systems. <br/><br/> 
                        <em>Data corruption/misinterpretation: </em>I had to carefully manage typecasting when using void pointers to handle different data types in MSP packets. Every time I accessed the data, I ensured that I cast the pointer to the correct type to avoid .
                        <br/><br/> 
                        <em>Buffer overflows:</em> I consistently checked the bounds of the data and managed the buffer size to ensure I wasn’t reading or writing outside the allocated memory.
                        <br/><br/> 
                        <em>Deferencing and Memory Access:</em> I made sure I was accessing the correct positions in the packet and using the correct types, such as uint8_t or uint16_t, to avoid errors during packet assembly and disassembly.
                        
                    </p>
                    <div className="spotifinder-content-divider"></div>

                    <h2 className="spotifinder-subtitle">
                        Android App:
                    </h2>
                        <div className="spotifinder-description-text-project-detail-caption"><p>
                            Using Android Studio, built with Java and Jetpack Compose I created a simple controller application to connect and control the Arduino drone. 
                        </p></div>
                        <br/>
                        <div className="spotifinder-description-text-project-detail-caption"><p>
                            <br/>
                            The app includes a simple controller page and connection screen, allowing users to discover nearby Bluetooth devices and their MAC addresses. Tap on CUPDRONE to connect, and a successful connection will be indicated by a flashing red LED on the Arduino.
                            <br/>
                            <br/>
                            The user can then unlock the drone (for safety), arming it and preparing it for flight. Once armed, a static blue LED will flash. At this stage, the phone will continuously send MSP packets to the drone, containing motor control commands for flight operation once the throttle joystick's Y-coordinate position changes. 
                        </p></div>
                        <div className="spotifinder-description-text-project-detail-caption"><p>
                            <strong>Communication protocol: </strong>The MSP packet can be transmitted via BLE, with the flight controller receiving the packet and processing the motor commands. From the back end, the UUIDs provided to the app are used to identify the Bluetooth services and characteristics that represent the MSP communication channel for sending the MSP data to the drone. Through the app, the position of the joystick will send data packets including the level of motor power to produce, hence allowing full pitch, yaw, and throttle mobility.
                        </p><br/>
                            <div className="spotifinder-content-divider"></div>
                        </div>
                    <h2 className="spotifinder-subtitle">
                        Final Thoughts:
                    </h2>
                    <div className="spotifinder-description-text-project-detail">
                        <p>
                        This was my first experience with an object-oriented project that combined both software and hardware, which felt daunting at first but became enjoyable as I got more involved. It was an excellent experience for me and I'm excited about diving into more projects like this in the future. 
                        <br/>
                        <br/>
                        <strong>This project was both personal and unique,</strong> offering a new experience in integrating frameworks and languages I hadn’t imagined could work together. It was both exciting and special, highlighting how deep my passion for this field can go.
                        <br/>
                        <br/>
                        Working with low-level languages like C++ for the first time was challenging due to unforeseen errors and bugs, but this project taught me to approach each issue diligently and methodically—a process I believe will benefit me in programming and beyond!
                        </p>
                    </div>
                </div>
            </div>
                

            <footer className="footer">
                    <p>© 2024 Jimin Ryu</p>
                <div className="social-icons-container-footer">
                    <a href="https://linkedin.com/in/jryu0" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i class="fab fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="mailto:jiminleeryu@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                        <i class="fas fa-envelope" aria-hidden="true"></i>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Automarket;