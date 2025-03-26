import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImage from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectButton = (selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  };

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImage} alt="quiz complete" />
        <h2>Quiz Complete!</h2>
      </div>
    );
  }

  const shuffleAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          timeout={10000}
          onTimeout={() => handleSelectAnswer(null)}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffleAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectButton(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
