import trivia from "./triviaData.json";
import React, { useState } from "react";

function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const clickNextQuestion = () => {
    if (currentQuestion < 20) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      console.log("clicking to next question", nextQuestion);
    }
  };

  return (
    <div className="Questions">
      <h1>Questions</h1>
      <div>
        <h1>{trivia[currentQuestion].question}</h1>
        <button onClick={clickNextQuestion}>
          {trivia[currentQuestion].correct}
        </button>
        {trivia[currentQuestion].incorrect.map((answer) => {
          return (
            <div>
              <button onClick={clickNextQuestion}>{answer}</button>;
            </div>
          );
        })}
        {/* {trivia.map((question) => {
          return (
            <div>
              <h1>{question.question}</h1>
              <h3>{question.correct}</h3>
              {question.incorrect.map((answer) => {
                return (
                  <div>
                    <h3>{answer}</h3>
                  </div>
                );
              })}
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default Questions;
