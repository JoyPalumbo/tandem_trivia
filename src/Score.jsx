import React from "react";

class Score extends React.Component {
  constructor() {
    super();

    this.state = { score: 0 };
  }
  render() {
    return (
      <div className="Score">
        <h1>Name's Score: {this.state.score}</h1>
      </div>
    );
  }
}

export default Score;
