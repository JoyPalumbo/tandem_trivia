// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import UserInfo from "./UserInfo";
import Questions from "./Questions";
import Score from "./Score";

function App() {
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const getNameFromChild = (nameFromChild) => {
    console.log("this is our data from child", nameFromChild);
    setName(nameFromChild);
  };

  const getScoreFromScore = (scoreFromChild) => {
    console.log("this is our data from child", scoreFromChild);
    setScore(scoreFromChild);
  };

  const getScoreFromQuestions = (scoreFromChild) => {
    console.log("this is our data from child", scoreFromChild);
    setScore(scoreFromChild);
  };

  return (
    <div className="App">
      <h1>Welcome to Tandem's Trivia App!</h1>
      <UserInfo callbackFromParent={getNameFromChild} />
      <Score callbackFromParent={getScoreFromScore} name={name} />
      <Questions callbackFromParent={getScoreFromQuestions} score={score} />
    </div>
  );
}

export default App;
