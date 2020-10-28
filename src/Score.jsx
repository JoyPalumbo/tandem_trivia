import React, { useState } from "react";

function Score(props) {
  const [score, setScore] = useState(0);

  const passScore = () => {
    setScore(score + 1);
    props.callbackFromParent(score);
  };

  return (
    <div className="Score">
      <h1>Name's Score: {score}</h1>
      <button onClick={passScore}>click</button>
    </div>
  );
}

export default Score;
