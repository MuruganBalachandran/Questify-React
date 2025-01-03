import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div  className="copyright">
          <p>&copy; 2023 Questify. All rights reserved.</p>
        </div>
        <nav className="footer-nav">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;