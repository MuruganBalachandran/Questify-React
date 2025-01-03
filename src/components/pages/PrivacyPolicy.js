import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Pages.css';

function PrivacyPolicy() {
  return (
    <div className="page-container">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Back to Home
      </Link>
      <h1 className="page-title">Privacy Policy</h1>
      <div className="page-content">
        <p>Last updated: June 1, 2023</p>
        <p>At Questify, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
        
        <h2>Information We Collect</h2>
        <p>We collect information that you provide directly to us, such as when you create an account, participate in quizzes, or contact us for support. This may include:</p>
        <ul>
          <li>Name and email address</li>
          <li>Quiz responses and scores</li>
          <li>User-generated content (e.g., quizzes you create)</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Personalize your experience</li>
          <li>Communicate with you about our services</li>
          <li>Monitor and analyze trends and usage</li>
        </ul>

        <h2>Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>

        <h2>Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@questify.com.</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;