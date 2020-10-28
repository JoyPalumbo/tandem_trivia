import trivia from "./triviaData.json";
import React, { useState, useEffect } from "react";

function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [allAnswers, setAnswers] = useState([]);
  const [mixedAnswers, setMixedAnswers] = useState([]);

  const clickNextQuestion = () => {
    if (currentQuestion < 20) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      console.log("clicking to next question", nextQuestion);
    }
  };

  const mixAnswers = () => {
    const mixed = [
      trivia[currentQuestion].correct,
      ...trivia[currentQuestion].incorrect,
    ].sort(() => Math.random() - 0.5);
    console.log("mixed answers", mixed);
    setMixedAnswers(mixed);
  };

  useEffect(() => {
    // mixAnswers();
  });

  return (
    <div className="Questions">
      <h1>Questions</h1>
      <div>
        <h1>{trivia[currentQuestion].question}</h1>
        {!mixedAnswers.length ? (
          <div>
            <button
              onClick={() => {
                clickNextQuestion();
              }}
            >
              {trivia[currentQuestion].correct}
            </button>

            {trivia[currentQuestion].incorrect.map((answer) => {
              return (
                <div>
                  <button
                    onClick={() => {
                      clickNextQuestion();
                    }}
                  >
                    {answer}
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          mixedAnswers.map((answer) => {
            return (
              <div>
                <button
                  onClick={() => {
                    mixAnswers();
                    clickNextQuestion();
                  }}
                >
                  {answer}
                </button>
              </div>
            );
          })
        )}

        {/* {mixedAnswers.map((answer) => {
          return (
            <div>
              <button
                onClick={() => {
                  mixAnswers();
                  clickNextQuestion();
                }}
              >
                {answer}
              </button>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default Questions;
