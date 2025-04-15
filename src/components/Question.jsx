import React from "react";
import Answers from "./Answers.jsx";
import QuestionTimer from "./QuestionTimer.jsx";

const Question = ({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) => {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        answerState={answerState}
        selectedAnswer={selectedAnswer}
        onSelect={onSelectAnswer}
      />
    </div>
  );
};

export default Question;
