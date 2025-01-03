import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './QuizParticipation.css';

function QuizParticipation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    // Simulating fetching quiz data
    const fetchQuiz = async () => {
      // Replace this with actual API call
      const mockQuiz = {
        id: id,
        title: "Sample Quiz",
        questions: [
          {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correctAnswer: 2,
            timeLimit: 30
          },
          {
            question: "Which planet is known as the Red Planet?",
            options: ["Mars", "Venus", "Jupiter", "Saturn"],
            correctAnswer: 0,
            timeLimit: 30
          }
        ]
      };
      setQuiz(mockQuiz);
      setTimeLeft(mockQuiz.questions[0].timeLimit);
    };

    fetchQuiz();
  }, [id]);

  useEffect(() => {
    if (timeLeft > 0 && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizCompleted) {
      handleNextQuestion();
    }
  }, [timeLeft, quizCompleted]);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quiz.questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setTimeLeft(quiz.questions[nextQuestion].timeLimit);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleBack = () => {
    if (window.confirm("Are you sure you want to leave the quiz? Your progress will be lost.")) {
      navigate('/dashboard');
    }
  };

  if (!quiz) {
    return <div className="loading">Loading quiz...</div>;
  }

  return (
    <div className="quiz-participation-wrapper">
      <button className="back-button" onClick={handleBack}>
        <ArrowLeft size={20} />
        Back to Dashboard
      </button>
      {!quizCompleted ? (
        <div className="quiz-question-card">
          <h2>{quiz.title}</h2>
          <div className="question-number">Question {currentQuestion + 1} of {quiz.questions.length}</div>
          <div className="timer">Time left: {timeLeft}s</div>
          <h3>{quiz.questions[currentQuestion].question}</h3>
          <div className="options">
            {quiz.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`option ${selectedAnswer === index ? 'selected' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleNextQuestion} className="next-button">
            {currentQuestion === quiz.questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      ) : (
        <div className="quiz-result-card">
          <h2>Quiz Completed!</h2>
          <p>Your score: {score} out of {quiz.questions.length}</p>
          <p>Percentage: {((score / quiz.questions.length) * 100).toFixed(2)}%</p>
          <button onClick={() => navigate('/dashboard')} className="finish-button">
            Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizParticipation;