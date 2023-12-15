import React from 'react';
import './contact.css';
import { AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
//import { AiFillFacebook } from 'react-icons/ai'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ykdzb05',
      'template_a9pcv7q',
      form.current,
      'dhahT8CthMYWxuQEn',
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Keep in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiTwotoneMail />
            <h4>Email</h4>
            <p>clairefantastic7@gmail.com</p>
            <a href="mailto:pinyunwuu@gmail.com">Send a Mail to Me</a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin />
            <h4>Linkedin</h4>
            <p>Yun-Ting (Claire) Chiou</p>
            <a href="https://www.linkedin.com/in/yun-ting-chiou-2210bb206/">
              View My Profile
            </a>
          </article>
        </div>
        <div className="form__container">
          <form ref={form} onSubmit={sendEmail}>
            <h3>Leave Message</h3>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Messgage
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
