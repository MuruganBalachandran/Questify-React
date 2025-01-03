import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Pages.css';

function TermsOfService() {
  return (
    <div className="page-container">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Back to Home
      </Link>
      <h1 className="page-title">Terms of Service</h1>
      <div className="page-content">
        <p>Last updated: June 1, 2023</p>
        <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Questify website (the "Service") operated by Questify ("us", "we", or "our").</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>

        <h2>2. User Accounts</h2>
        <p>When you create an account with us, you must provide accurate, complete, and up-to-date information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

        <h2>3. Content</h2>
        <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.</p>

        <h2>4. Intellectual Property</h2>
        <p>The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Questify and its licensors.</p>

        <h2>5. Termination</h2>
        <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

        <h2>6. Limitation of Liability</h2>
        <p>In no event shall Questify, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

        <h2>7. Changes</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</p>

        <h2>8. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at terms@questify.com.</p>
      </div>
    </div>
  );
}

export default TermsOfService;