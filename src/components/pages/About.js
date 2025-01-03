import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Pages.css';

function About() {
  return (
    <div className="page-container">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} />
        Back to Home
      </Link>
      <h1 className="page-title">About Questify</h1>
      <div className="page-content">
        <p>Questify is an innovative quiz platform designed to make learning fun and engaging. Our mission is to provide an immersive and interactive experience for quiz enthusiasts of all ages and backgrounds.</p>
        <h2>Our Story</h2>
        <p>Founded in 2023, Questify was born out of a passion for knowledge and a desire to create a community of lifelong learners. We believe that education should be accessible, enjoyable, and rewarding.</p>
        <h2>What We Offer</h2>
        <ul>
          <li>A vast library of quizzes covering various topics</li>
          <li>The ability to create and share your own quizzes</li>
          <li>Competitive leaderboards to challenge yourself and others</li>
          <li>A rewarding system with badges and achievements</li>
        </ul>
        <h2>Our Team</h2>
        <p>Questify is brought to you by a dedicated team of educators, developers, and quiz enthusiasts who are committed to creating the best possible learning experience for our users.</p>
        <p>Join us on this exciting journey of discovery and learning!</p>
      </div>
    </div>
  );
}

export default About;