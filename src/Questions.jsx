import trivia from "./triviaData.json";
import React, { useState, useEffect } from "react";

function Questions(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [mixedAnswers, setMixedAnswers] = useState([]);
  const [scoreUpdate, setScoreUpdate] = useState(props.score);
  const [showAnswers, setShowAnswers] = useState(false);

  const passScore = () => {
    props.callbackFromParent(scoreUpdate);
  };

  const clickNextQuestion = (answer) => {
    //check to see if the currentQuestion is less than 20
    if (currentQuestion < 20) {
      //increment currentQuestion to use as index in questions array to allow to
      // to move to next question
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      console.log("clicking to next question", nextQuestion);
    } else {
      //end of quiz, give score to user
      console.log("is it working?", scoreUpdate);
      alert("Your score is: " + scoreUpdate);

      //if we want to save score and name to database
      // prompt(
      //   `Great job! Your score is:  ${scoreUpdate}`,
      //   "Enter your name to save your score..."
      // );
      // setAlert(true);
    }
    setShowAnswers(false);
  };

  const scoreFunc = (answer) => {
    if (answer === trivia[currentQuestion].correct) {
      setScoreUpdate(scoreUpdate + 1);
      console.log("new score", scoreUpdate);
    }
    setShowAnswers(true);
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

  return (
    <div className="Questions">
      <div class="container">
        <div class="card h-100 shadow p-3 mb-5 card rounded ">
          {/* <div class="card-text"> */}
          <div class="row">
            <div class="col-md-12">
              <div class="pb-4">
                <h1>{trivia[currentQuestion].question}</h1>
                <div class="pt-4"></div>
                {/* terinary to see if we've mixed answers yet */}
                {mixedAnswers.length < 1 ? (
                  <div>
                    {/* terinary to see if button should be green or not */}
                    {showAnswers ? (
                      <div>
                        <button
                          type="button"
                          class="btn btn-success button mb-2"
                          onClick={() => {
                            scoreFunc();
                          }}
                        >
                          {trivia[currentQuestion].correct}
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          type="button"
                          class="btn btn-info btn-block mb-2"
                          onClick={() => {
                            scoreFunc(trivia[currentQuestion].correct);
                          }}
                        >
                          {trivia[currentQuestion].correct}
                        </button>
                      </div>
                    )}
                    {trivia[currentQuestion].incorrect.map((answer) => {
                      const buttonColor = showAnswers
                        ? answer === trivia[currentQuestion].correct
                          ? "btn-success"
                          : "btn-danger"
                        : "btn-info";

                      return (
                        <div>
                          <button
                            type="button"
                            class={`btn ${buttonColor} btn-block mb-2 `}
                            onClick={() => {
                              passScore();
                              scoreFunc(answer);
                            }}
                          >
                            {answer}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  // Once we have all the answers mixed
                  mixedAnswers.map((answer) => {
                    const buttonColor = showAnswers
                      ? answer === trivia[currentQuestion].correct
                        ? "btn-success"
                        : "btn-danger"
                      : "btn-info";
                    return (
                      <div>
                        <button
                          type="button"
                          class={`btn ${buttonColor} btn-block mb-2 `}
                          onClick={() => {
                            passScore();
                            scoreFunc(answer);
                          }}
                        >
                          {answer}
                        </button>
                      </div>
                    );
                  })
                )}
                <div class="pt-4"></div>
                <button
                  type="button"
                  class="btn btn-info btn-block mb-2 "
                  onClick={() => {
                    mixAnswers();
                    clickNextQuestion();
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal" id="scoreModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title">Final Score</h2>
              <button type="button" class="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h2>Your final score is: {scoreUpdate}</h2>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Questions;
