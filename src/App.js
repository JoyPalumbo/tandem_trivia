// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import UserInfo from "./UserInfo";
import Questions from "./Questions";
import Score from "./Score";

function App() {
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const [scoreUpdate, setScoreUpdate] = useState(0);
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
    setScoreUpdate(scoreFromChild);
  };

  const updateScore = () => {
    setScore(score + scoreUpdate);
  };

  return (
    <div className="App">
      <div className="container">
        <div class="row justify-content-md-center">
          <h1>Welcome to Tandem's Trivia App!</h1>
        </div>
        <div class="mb-4"></div>
        <div class="row justify-content-md-center">
          <div class="col-md-auto">
            {/* <div class="w-100"> */}
            {/* <div class="row justify-content-md-center"> */}
            {/* <Score
              callbackFromParent={getScoreFromScore}
              name={name}
              score={scoreUpdate}
            /> */}
          </div>

          <div class="mb-2"></div>
        </div>
        <div class="row justify-content-md-center">
          {/* <div class="mb-4"></div> */}
          <Questions
            callbackFromParent={getScoreFromQuestions}
            score={scoreUpdate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
