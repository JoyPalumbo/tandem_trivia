import trivia from "./triviaData.json";
import React, { useState, useEffect } from "react";

// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";

function Questions(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [allAnswers, setAnswers] = useState([]);
  const [mixedAnswers, setMixedAnswers] = useState([]);
  const [scoreUpdate, setScoreUpdate] = useState(props.score + 1);
  const [alert, setAlert] = useState(false);

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
      // alert("Your score is: " + scoreUpdate);
      setAlert(true);
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
      <div class="container">
        <div class="card h-100 shadow p-3 mb-5 bg-white rounded ">
          <div class="row">
            <div class="col-md-12">
              <div>
                <h1>{trivia[currentQuestion].question}</h1>
                {mixedAnswers.length < 1 ? (
                  <div>
                    <button
                      type="button"
                      class="btn btn-outline-info mb-2"
                      onClick={() => {
                        passScore();
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
                            type="button"
                            class="btn btn-outline-info mb-2"
                            onClick={() => {
                              passScore();
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
                          type="button"
                          class="btn btn-outline-info mb-2"
                          onClick={() => {
                            passScore();
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
                {alert === true ? (
                  <div>
                    <button
                      type="button"
                      class="btn btn-outline-info mb-2"
                      data-toggle="modal"
                      data-target="#scoreModal"
                    >
                      Finished
                    </button>
                  </div>
                ) : (
                  ""
                )}
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
        </div>
      </div>
    </div>
  );
}

export default Questions;
