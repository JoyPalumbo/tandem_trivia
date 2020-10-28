import React from "react";

class Score extends React.Component {
  constructor() {
    super();

    this.state = {
      score: 0,
    };

    this.updateScore = this.updateScore.bind(this);
  }

  updateScore() {
    this.setState({
      score: this.state.score + 1,
    });
    console.log("we're clicking", this.state.score);
  }
  render() {
    return (
      <div className="Score">
        <h1>Name's Score: {this.state.score}</h1>
        <button onClick={this.updateScore}>click</button>
      </div>
    );
  }
}

export default Score;
