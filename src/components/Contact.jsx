import React from 'react'
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='contact_all'>
      <div className='container'>
        <div className='contact_content'>
          <div className='content'>
            <h1>get in touch</h1>
            <p className='first'>i would like here form you</p>
            <p className='second'>if you have any inquiries or just want to say hi , please use contact form</p>
            <div className='contact_mail'>
                  <CiMail /> 
                <Link >adel6786789@gamil.com</Link>
            </div>
          </div>
        </div>
        <div className='form'>

                      <form id="contact-form" action="/submit" method="post" novalidate>
                            <div class="field">
                              <label for="first-name">First name</label>
                              <input id="first-name" name="first_name" type="text" placeholder="Your first name" required />
                            </div>

                            <div class="field">
                              <label for="last-name">Last name</label>
                              <input id="last-name" name="last_name" type="text" placeholder="Your last name" required />
                            </div>

                            <div class="field">
                              <label for="phone">Phone number</label>
                              <input id="phone" name="phone" type="tel" placeholder="Your phone number" pattern="^[0-9+\-\s()]+$" required />
                            </div>

                            <div class="field">
                              <label for="message">Message</label>
                              <textarea id="message" name="message" placeholder="Your message" rows="4"></textarea>
                            </div>

                            <div class="actions">
                              <button type="submit">Submit</button>
                            </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
