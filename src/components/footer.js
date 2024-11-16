import React from 'react';
import './footer.css'; 
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer" id='contact'>
            <div className="footer-content">
                <div className='company'>
                    <h2>Magic Moments</h2>
                    <p>We provides accommodations, food, drink, and other amenities to help vacationers meet their needs.
                        A place to which people frequently or generally go for relaxation or pleasure, especially one providing rest and recreation facilities for vacationers</p>
                </div>
                <div className="footer-contact">
                    <h2>Contact Info</h2>
                    <p>
                        Flat 20, VOC Nagar<br/>
                        Vikravandi, Villupuram 605625<br/>
                        SelvaKumar +91 94956 52248<br/>
                        Suresh Athi +91 99439 59920

                    </p>
                    <div className='link'>
                        <a href="/" target="_blank" className='insta' >
                            <FaInstagram />
                        </a>
                        <a href="/" target="_blank" className='whats'>
                            <FaWhatsapp />
                        </a>
                        <a href="/" target="_blank" className='twit'>
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
                <div>
                    <h2>Mail to <IoMdMail style={{marginTop:'6px',marginLeft:'2px',position:'absolute'}}/></h2>
                    <p>Send Your thoughts and Comments</p>
                    <input type='email'className='email' placeholder='Email'/><button className='sendbutt'>Send</button>
                </div>
            </div>
            <div className="footer-copyright">
                &copy; 2024 Magic Moments
            </div>
        </footer>
    );
}

export default Footer;
