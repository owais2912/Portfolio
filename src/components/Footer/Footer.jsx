import React from 'react';
import './Footer.css';
import footer_logo from '@assets/images/logo1.png';
import user_icon from '@assets/user_icon.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="top-left">
                    <img src={footer_logo} alt="" />
                    <p>A web developer with expertise in JavaScript, React, Node.js, and MERN stack, specializing in building dynamic, scalable web applications and crafting efficient APIs to meet modern business needs.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Owais Ansari. All Rights Reserved.</p>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer