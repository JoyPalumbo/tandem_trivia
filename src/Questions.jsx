import trivia from "./triviaData.json";
import React, { useState, useEffect } from "react";

function Questions(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [allAnswers, setAnswers] = useState([]);
  const [mixedAnswers, setMixedAnswers] = useState([]);
  const [scoreUpdate, setScoreUpdate] = useState(props.score + 1);

  const passScore = () => {
    props.callbackFromParent(scoreUpdate);
  };

  const clickNextQuestion = (answer) => {
    //may make new function for score increment
    if (answer === trivia[currentQuestion].correct) {
      setScoreUpdate(scoreUpdate + 1);
      console.log("new score", scoreUpdate);
    }

    // console.log("this is the button they clicked", answer);
    if (currentQuestion < 20) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      console.log("clicking to next question", nextQuestion);
    } else {
      console.log("is it working?", scoreUpdate);
      alert("Your score is: " + scoreUpdate);
    }
  };

  const mixAnswers = () => {
    if (currentQuestion < 20) {
      const mixed = [
        trivia[currentQuestion + 1].correct,
        ...trivia[currentQuestion + 1].incorrect,
      ].sort(() => Math.random() - 0.5);
      console.log("mixed answers", mixed);
      setMixedAnswers(mixed);
    }
  };

  useEffect(() => {
    // mixAnswers();
  });

  return (
    <div className="Questions">
      <h1>Questions</h1>
      <div>
        <h1>{trivia[currentQuestion].question}</h1>
        {mixedAnswers.length < 1 ? (
          <div>
            <button
              onClick={() => {
                mixAnswers();
                clickNextQuestion(trivia[currentQuestion].correct);
              }}
            >
              {trivia[currentQuestion].correct}
            </button>

            {trivia[currentQuestion].incorrect.map((answer) => {
              return (
                <div>
                  <button
                    onClick={() => {
                      mixAnswers();
                      clickNextQuestion(answer);
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
                    clickNextQuestion(answer);
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
