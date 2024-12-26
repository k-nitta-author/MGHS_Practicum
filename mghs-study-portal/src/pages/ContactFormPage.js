import React, { useState } from 'react';


const ContactFormPage = () => {
  const [message, setMessage] = useState('');


  // send the contact data via a post request to the backend api. 
  // the backend api will send the email via gmail to the desired source
  // prferably learn how vercel handles env variables. 
  // better not hardcode that into the system
  // --KEN
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Message sent:', message);
  };

  return (
    <section>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>

        
        <label>Full Name</label>
        <input></input>

        <label>Email Address</label>
        <input type='text'></input>

        <label>Message</label>
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>

      <footer>
        
        <section>
          <h2>Contact</h2>
        </section>

        <section>
          <h2>Socials</h2>
          
          {/*USE A SERIES OF ICONS FOR THE SOCIAL MEDIA LINKS*/}
          <section>

          </section>
        </section>

      </footer>

    </section>
  );
};

export default ContactFormPage;
