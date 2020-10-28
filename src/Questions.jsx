import trivia from "./triviaData.json";

function Questions() {
  return (
    <div className="Questions">
      <h1>Questions</h1>
      <div>
        {trivia.map((question) => {
          return (
            <div>
              <h1>{question.question}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Questions;
