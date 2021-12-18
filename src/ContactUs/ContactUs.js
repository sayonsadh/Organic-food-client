import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';
import Dashboard from '../Dashboard/Dashboard/Dashboard';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9nnd5o1', 'template_u61ws64', form.current, 'user_QitPanAqA8zYI4Kms3Xgp')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <div>
      <Dashboard></Dashboard>
      <h4 className='mt-5 mb-3 ms-5' >Get In Touch.</h4>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input className='nameField ms-2' type="text" name="user_name" />

        <label className='ms-3' >Email</label>
        <input className='emailField ms-2 mb-3' type="email" name="user_email" /><br/>

        <label>Subject</label>
        <input className='subjectField ms-2 mb-3 ' type="text" name="subject" /><br/>

        <div className='msg'>
        <div className='message me-2'  ><label >Message</label></div>
        <div className='messageField' ><textarea className='' name="message" /><br/></div>
        </div>

        <input className='btn btn-primary mt-4 ms-5 button' type="submit" value="Send" />
      </form>
      
    </div>
  );
};