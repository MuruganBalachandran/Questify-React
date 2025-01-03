import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const user = {
    name: 'Quiz Enthusiast',
    level: 5,
    progress: 75,
    badges: ['🏆', '⚡', '🧠', '🌟'],
  };

  return (
    <div className="dashboard fade-in">
      <h2 className="welcome-message slide-in">Welcome back, {user.name}!</h2>
      <div className="action-buttons">
        <Link to="/quiz/join" className="action-button slide-in" style={{animationDelay: '0.1s'}}>
          <span className="button-icon">🚀</span>
          Start a Quest
        </Link>
        <Link to="/create-quiz" className="action-button slide-in" style={{animationDelay: '0.2s'}}>
          <span className="button-icon">🛠️</span>
          Forge a New Quest
        </Link>
        <Link to="/leaderboard" className="action-button slide-in" style={{animationDelay: '0.3s'}}>
          <span className="button-icon">🏅</span>
          Leaderboard
        </Link>
      </div>
      <div className="progress-section slide-in" style={{animationDelay: '0.4s'}}>
        <h3>Quest Progress</h3>
        <div className="progress-bar">
          <div className="progress" style={{width: `${user.progress}%`}}></div>
        </div>
        <p>Level {user.level} - {user.progress}% to next level</p>
      </div>
      <div className="badges-section slide-in" style={{animationDelay: '0.5s'}}>
        <h3>Badges</h3>
        <div className="badge-grid">
          {user.badges.map((badge, index) => (
            <div key={index} className="badge" title={`Badge ${index + 1}`}>
              {badge}
            </div>
          ))}
        </div>
      </div>
      <div className="notification-center slide-in" style={{animationDelay: '0.6s'}}>
        <h3>Notifications</h3>
        <div className="notification">
          <p>New quiz challenge from FriendUser1!</p>
        </div>
        <div className="notification">
          <p>You've earned a new badge: Quiz Master!</p>
        </div>
        <div className="notification">
          <p>Don't forget to complete the "History Trivia" quest!</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;