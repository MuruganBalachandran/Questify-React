import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Pages.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email, message });
    setSubmitted(true);
  };

  return (
    <div className="page-container">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Back to Home
      </Link>
      <h1 className="page-title">Contact Us</h1>
      <div className="page-content">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        ) : (
          <div className="success-message">
            <h2>Thank you for your message!</h2>
            <p>We'll get back to you as soon as possible.</p>
          </div>
        )}
        <div className="contact-info">
          <h2>Other Ways to Reach Us</h2>
          <p>Email: support@questify.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Quiz Street, Knowledge City, QZ 12345</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;