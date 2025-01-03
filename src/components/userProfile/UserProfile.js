import React, { useState, useEffect } from 'react';
import './UserProfile.css';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulating fetching user data
    const fetchUserData = async () => {
      // Replace this with actual API call
      const mockUser = {
        username: "QuizMaster",
        email: "quizmaster@example.com",
        totalScore: 1500,
        quizzesCompleted: 50,
        badges: ["🏆", "⚡", "🧠", "🌟", "🎓"],
        recentQuizzes: [
          { id: 1, title: "History Trivia", score: 90, date: "2023-05-15" },
          { id: 2, title: "Science Quiz", score: 85, date: "2023-05-10" },
          { id: 3, title: "Pop Culture Challenge", score: 95, date: "2023-05-05" },
        ]
      };
      setUser(mockUser);
    };

    fetchUserData();
  }, []);

  if (!user) {
    return <div className="loading">Loading user profile...</div>;
  }

  return (
    <div className="user-profile-wrapper">
      <h2>User Profile</h2>
      <div className="user-info">
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
      <div className="user-stats">
        <div className="stat">
          <h4>Total Score</h4>
          <p>{user.totalScore}</p>
        </div>
        <div className="stat">
          <h4>Quizzes Completed</h4>
          <p>{user.quizzesCompleted}</p>
        </div>
      </div>
      <div className="badges-section">
        <h4>Badges</h4>
        <div className="badges">
          {user.badges.map((badge, index) => (
            <span key={index} className="badge" title={`Badge ${index + 1}`}>
              {badge}
            </span>
          ))}
        </div>
      </div>
      <div className="recent-quizzes">
        <h4>Recent Quizzes</h4>
        <ul>
          {user.recentQuizzes.map((quiz) => (
            <li key={quiz.id}>
              <span className="quiz-title">{quiz.title}</span>
              <span className="quiz-score">Score: {quiz.score}% </span>
              <span className="quiz-date">{quiz.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;