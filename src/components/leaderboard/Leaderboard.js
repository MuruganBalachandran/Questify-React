import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Leaderboard.css';

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [filter, setFilter] = useState('all-time');
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating fetching leaderboard data
    const fetchLeaderboardData = async () => {
      // Replace this with actual API call
      const mockData = [
        { id: 1, username: "QuizMaster", score: 1500, quizzes: 50 },
        { id: 2, username: "TriviaKing", score: 1350, quizzes: 45 },
        { id: 3, username: "BrainiacQueen", score: 1200, quizzes: 40 },
        { id: 4, username: "KnowledgeNinja", score: 1100, quizzes: 35 },
        { id: 5, username: "QuizWhiz", score: 1000, quizzes: 30 },
      ];
      setLeaderboardData(mockData);
    };

    fetchLeaderboardData();
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    // In a real application, you would fetch new data based on the filter
  };

  return (
    <div className="leaderboard-wrapper">
      <button className="back-button" onClick={() => navigate(-1)}>
        <ArrowLeft size={20} />
        Back
      </button>
      <h2>Leaderboard</h2>
      <div className="filter-buttons">
        <button
          onClick={() => handleFilterChange('all-time')}
          className={filter === 'all-time' ? 'active' : ''}
        >
          All-time
        </button>
        <button
          onClick={() => handleFilterChange('this-week')}
          className={filter === 'this-week' ? 'active' : ''}
        >
          This Week
        </button>
        <button
          onClick={() => handleFilterChange('today')}
          className={filter === 'today' ? 'active' : ''}
        >
          Today
        </button>
      </div>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
            <th>Quizzes Completed</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.score}</td>
              <td>{user.quizzes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;