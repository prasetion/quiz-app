import React from "react";
import logoQuiz from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={logoQuiz} alt="logo quiz" />
      <h1>React Quiz </h1>
    </header>
  );
};

export default Header;
