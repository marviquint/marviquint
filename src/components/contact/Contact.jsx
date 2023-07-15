import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5re0ijr', 'template_3ipnqtw', form.current, 'VcOp4jRSXgUsN8i1f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>marviquintb@gmail.com</h5>
            <a className="btn" href="mailto:marviquintb@gmail.com">Send Mail</a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Marviquint</h5>
            <a className="btn" href="https://m.me/Marviquint">Send Message</a>
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icon"/>
            <h4>Instagram</h4>
            <h5>@kin.gold_11</h5>
            <a className="btn" href="https://ig.me/kin.gold_11">Send DM</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" id="message" cols="30" rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact