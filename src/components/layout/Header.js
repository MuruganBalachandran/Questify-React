import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/dashboard" className="logo">
          <span className="logo-icon">🏆</span>
          Questify
        </Link>
        <nav>
          <ul className="nav-list">
            <li>
              <button className="btn btn-nav" onClick={() => navigate('/dashboard')}>
                <span className="icon">🏠</span>
                Home
              </button>
            </li>
            <li>
              <button className="btn btn-nav" onClick={() => navigate('/create-quiz')}>
                <span className="icon">➕</span>
                Create Quiz
              </button>
            </li>
            <li>
              <button className="btn btn-nav" onClick={() => navigate('/profile')}>
                <span className="icon">👤</span>
                Profile
              </button>
            </li>
            <li>
              <button className="btn btn-nav" onClick={() => navigate('/login')}>
                <span className="icon">🚪</span>
                Logout
              </button>
            </li>
            <li>
              <button className="btn btn-nav theme-toggle" onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon /> : <FaSun />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;