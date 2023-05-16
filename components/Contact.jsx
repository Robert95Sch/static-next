import React from 'react';
import emailjs from '@emailjs/browser';
import Header from './Header.jsx';
import ContactStyles from '../styles/components/Contact.module.scss'

import { baskerVille, leagueSpartan } from '@/util/fonts'

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fppej9d', 'template_ij66m24', e.target, 'user_tPwEwZeUHFlaN3PHk72Nh')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
    setStatus(true)
  };

  return (
    <div className="component" data-scroll-section id="contact">
      <form className={ContactStyles.contactForm} onSubmit={sendEmail}>
        <Header
          title="Get in Touch"
        />
        <div className={ContactStyles.contactText}>
          <p className={baskerVille.className}>To discuss more about what we offer, feel free to get in touch using the form below and we’ll get back to you as soon as we can.</p>
        </div>
        <div className={ContactStyles.contactField}>
          <label htmlFor="name" className="label-name" ><span className="content-name">Name</span></label>
          <input type="text" name="name" autoComplete="off" required />
        </div>
        <div className={ContactStyles.contactField}>
          <label htmlFor="name" className="label-name" ><span className="content-name">Email Address</span></label>
          <input type="text" name="email" autoComplete="off" />
        </div>
        <div className={ContactStyles.contactField}>
          <label htmlFor="name" className="label-name" ><span className="content-name">Subject</span></label>
          <select className={leagueSpartan.className} type="text" name="subject" autoComplete="off" required>
            <option>Please pick a subject</option>
            <option>Acoustic Guitar Lessons</option>
            <option>Electric Guitar Lessons</option>
            <option>Bass Guitar Lessons</option>
            <option>Other</option>
          </select>
        </div>
        <div className={ContactStyles.contactField}>
          <label htmlFor="name" className="label-name" ><span className="content-name">Message</span></label>
          <textarea type="text" name="message" autoComplete="off" required />
        </div>
        <button className={`${leagueSpartan.className} ${ContactStyles.sendBtn}`} type="submit" >Lets Chat</button>
      </form>
    </div>
  )
}

export default Contact