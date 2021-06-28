import React from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_Gd89h7Jpm0iZNRBVHRpWg")

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_oopaokf', 'template_uo4pyzd', e.target,'user_Gd89h7Jpm0iZNRBVHRpWg')

      .then(() => {
          console.log();
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

