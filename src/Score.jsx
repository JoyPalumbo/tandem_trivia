import React, { useState } from "react";

function Score(props) {
  const [score, setScore] = useState(0);

  const passScore = () => {
    setScore(score + 1);
    props.callbackFromParent(score);
    console.log("this is the props in score", props);
  };

  return (
    <div className="Score">
      <h1>Your Score: {props.score}</h1>
      {/* <button onClick={passScore}></button> */}
    </div>
  );
}

export default Score;
