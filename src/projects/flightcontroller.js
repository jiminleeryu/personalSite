import React from 'react';
import '../styles/spotifinder.css'
import multiwii_schema_title from '../images/multiserial_title.png'
import drone_image from '../images/drone.png'
import Joystick_img from '../images/joystick_page.jpg'
import Connection_Page from '../images/connection_page.jpg'
import Connection_Page_unlocked from '../images/connection_page_unlocked.jpg'
import Gist from 'react-embed-gist';

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
                        <p className="spotifinder-description-text-project-subtitle">Android + Arduino Flight Controller Application | Java, C++ 
                            <br/>
                        <a className='github-clickable' href="https://github.com/jiminleeryu/FlightController" target="_blank"> <strong>GitHub</strong></a>
                        </p>
                    </div>
                    

                <div className="content-container-detail">
                    <h2 className="spotifinder-subtitle">Overview:</h2>
                        <p className="spotifinder-description-text-project-detail">
                        Throughout high school, I developed a hobby of building drones from scratch. However, the process of configuring flight controllers with an RC transmitter is often difficult and expensive. To tackle this challenge, I wanted to build a small educational drone along with a simple app from scratch that could coordinate drone control over a light Bluetooth transmission. This app is compatible for devices beyond Android 5.0 (Lollipop).
                        <br/>
                        <br/>
                        This project included two components:
                        <strong> building the drone</strong> and <strong>developing the flight controller app.</strong>
                        </p>
                    <h2 className="spotifinder-subtitle">
                        Drone Onboard Communication:
                    </h2>
                        <p className="spotifinder-description-text-project-detail">
                        I used an Arduino Leonardo flight controller board to build the drone, and programmed the flight functionality using C++. 
                        </p>

                        <img className="spotifinder-image-drone" src={drone_image}></img>
                        <div className="spotifinder-description-text-project-detail-caption"><p>
                            To communicate between the Android device (client) and the drone (server) I used the <strong>MultiWii Serial Protocol (MSP)</strong>, a request-response protocol that can exchange packets transmitted via Bluetooth Low Energy. 
                            <br/>
                            <br/>
                            To relay messages, we need to first create the MSP packet to be structured in the following format, with three types of messages: 
                            </p></div>
                        <img className="spotifinder-image-drone" src={multiwii_schema_title}></img>
                        <div className="spotifinder-description-text-project-detail-caption"><p>
                        <strong>Preamble (3 bytes):</strong> The ASCII characters $M mark the start of a packet.<br/>
	                    <strong>Direction (1 byte):</strong> Indicates the packet direction, either to or from the MultiWii Controller<br/>
	                    <strong>Size (1 byte):</strong> The number of data bytes, typically between 0 and 32, depending on the message.<br/>
	                    <strong>Command:</strong> A specific command ID that corresponds to the desired action <strong>(see snippet below)</strong> <br/>
	                    <strong>Data:</strong> Payload containing the data for the specific command. Returns combinations of <strong>uint8_t</strong> and <strong>uint32_t</strong> bits of data depending on type request.<br/>
	                    <strong>Checksum (Cyclic Redundancy Check):</strong> A checksum is calculated by XORing the size, command, and data bytes, ensuring data integrity.
                            </p></div>
                        <div className="github-gist">
                            <Gist gist="jiminleeryu/18dc247efee7746df06124f6731028f4" />
                        </div>
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
                        <img className="spotifinder-image-drone" src={Joystick_img}></img>
                        <br/>
                        <img className="spotifinder-image-drone" src={Connection_Page}></img>
                        <div className="spotifinder-description-text-project-detail-caption"><p>
                            <br/>
                            The app includes a simple controller page and connection screen, allowing users to discover nearby Bluetooth devices and their MAC addresses. Tap on CUPDRONE to connect, and a successful connection will be indicated by a flashing red LED on the Arduino.
                            <br/>
                            <br/>
                            The user can then unlock the drone (for safety), arming it and preparing it for flight. Once armed, a static blue LED will flash. At this stage, the phone will continuously send MSP packets to the drone, containing motor control commands for flight operation once the throttle joystick's Y-coordinate position changes. 
                        </p></div>
                        <img className="spotifinder-image-drone" src={Connection_Page_unlocked}></img>
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
                        This was my first experience with an object-oriented project that combined both software and hardware, which felt daunting at first but became enjoyable as I got more involved.
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