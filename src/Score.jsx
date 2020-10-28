import React, { useState } from "react";

function Score() {
  const [score, setScore] = useState(0);

  const updateScore = () => {
    const newScore = score + 1;
    setScore(newScore);
    console.log("clicking to next question", newScore);
  };

  // render() {
  return (
    <div className="Score">
      <h1>Name's Score: {score}</h1>
      <button onClick={updateScore}>click</button>
    </div>
  );
}

export default Score;
