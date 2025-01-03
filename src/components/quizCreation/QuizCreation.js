import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizCreation.css';

function QuizCreation() {
  const [step, setStep] = useState(1);
  const [quizTitle, setQuizTitle] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    type: 'multiple',
    options: ['', '', '', ''],
    correctAnswer: 0,
    timeLimit: 30,
  });
  const navigate = useNavigate();

  const addQuestion = () => {
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({
      question: '',
      type: 'multiple',
      options: ['', '', '', ''],
      correctAnswer: 0,
      timeLimit: 30,
    });
  };

  const handleQuestionChange = (e) => 
    setCurrentQuestion({ ...currentQuestion, question: e.target.value });

  const handleOptionChange = (index, value) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = value;
    setCurrentQuestion({ ...currentQuestion, options: newOptions });
  };

  const handleCorrectAnswerChange = (e) =>
    setCurrentQuestion({ ...currentQuestion, correctAnswer: parseInt(e.target.value) });

  const handleTimeLimitChange = (e) =>
    setCurrentQuestion({ ...currentQuestion, timeLimit: parseInt(e.target.value) });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="quiz-creation-wrapper">
      <div className="quiz-creation-card">
        <button className="back-button" onClick={handleBack}>← Back</button>
        {step === 1 && (
          <div className="step">
            <h2 className="step-title">Step 1: Craft Your Quest</h2>
            <input
              type="text"
              placeholder="Quiz Title"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
            />
            <textarea
              placeholder="Quiz Description"
              value={quizDescription}
              onChange={(e) => setQuizDescription(e.target.value)}
            />
            <button onClick={nextStep} className="next-button">Next</button>
          </div>
        )}

        {step === 2 && (
          <div className="step">
            <h2 className="step-title">Step 2: Forge Your Questions</h2>
            <input
              type="text"
              placeholder="Question"
              value={currentQuestion.question}
              onChange={handleQuestionChange}
            />
            {currentQuestion.options.map((option, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
            ))}
            <select
              value={currentQuestion.correctAnswer}
              onChange={handleCorrectAnswerChange}
            >
              {currentQuestion.options.map((_, index) => (
                <option key={index} value={index}>
                  Option {index + 1} is correct
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Time Limit (seconds)"
              value={currentQuestion.timeLimit}
              onChange={handleTimeLimitChange}
            />
            <button onClick={addQuestion} className="add-question-button">Add Question</button>
            <ul className="question-list">
              {questions.map((q, index) => (
                <li key={index} className="question-item">
                  {q.question} - {q.options[q.correctAnswer]}
                </li>
              ))}
            </ul>
            <button onClick={prevStep} className="prev-button">Previous</button>
            <button onClick={nextStep} className="next-button">Next</button>
          </div>
        )}

        {step === 3 && (
          <div className="step">
            <h2 className="step-title">Step 3: Choose Your Theme</h2>
            <select>
              <option value="adventure">Adventure</option>
              <option value="scifi">Sci-Fi</option>
              <option value="fantasy">Fantasy</option>
            </select>
            <button onClick={prevStep} className="prev-button">Previous</button>
            <button className="create-button">Create Quest</button>
          </div>
        )}

        <div className="preview-section">
          <h3>Quest Preview</h3>
          <h4>{quizTitle}</h4>
          <p>{quizDescription}</p>
          <p>Number of questions: {questions.length}</p>
        </div>
      </div>
    </div>
  );
}

export default QuizCreation;