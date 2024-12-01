import React, { useState, useRef } from 'react';
import './Contact.css';
import theme_pattern from '@assets/theme_pattern.svg';
import mail_icon from '@assets/mail_icon.svg';
import location_icon from '@assets/location_icon.svg';
import call_icon from '@assets/call_icon.svg';

const Contact = () => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const formRef = useRef();

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", import.meta.env.VITE_WEB3_FORM_ACCESS_KEY);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());

        if (res.success) {
            setModalMessage("Thank you! Your message has been successfully sent.");
            setIsModalOpen(true);
            formRef.current.reset();
        } else {
            setModalMessage("Oops! Something went wrong. Please try again later.");
            setIsModalOpen(true);
        }
      };
    
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get In Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm excited to connect with you! Whether you have a project in mind, need assistance, or just want to say hello, feel free to reach out. Let's create something amazing together!</p>
                    <div className="contact-details">
                        <div className="detail"><img src={mail_icon} alt="" /><p>owaisansari2912@gmail.com</p></div>
                        <div className="detail"><img src={call_icon} alt="" /><p>+91 77779 95533</p></div>
                        <div className="detail"><img src={location_icon} alt="" /><p>Valsad, Gujarat, India.</p></div>
                    </div>
                </div>
                <form ref={formRef} className='contact-right' onSubmit={onSubmit}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" name='email' placeholder='Enter your email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name='message' rows='8' placeholder='Enter your message' />
                    <button type="submit" className='contact-submit'>Submit Now</button>
                </form>
            </div>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <p>{modalMessage}</p>
                        <button onClick={() => setIsModalOpen(false)} className="modal-close-btn">Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Contact