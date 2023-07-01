import PropTypes from "prop-types";
import { useState } from "react";
import "../index.css";
import Progressbar from "./Progressbar";
import Rank from "./Rank";
//this component is the main component that render the questions and answers
function Question(props) {
  const [score, setScore] = useState(0); //the score of the user
  const [active, setActive] = useState(0);//the active question
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null); //the selected answer
  const [showResult, setShowResult] = useState(false);//show the result
  //this function is called when the user select an answer
  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer == props.q[active].pos) {
      setScore(score + 1);
    }
  };
  //this function is called when the user click on the next button
  const onClickNext = () => {
    setSelectedAnswerIndex(null);

    if (active == props.q.length - 1) {
      setShowResult(true);
    } else {
      setActive(active + 1);
    }
  };
  return (
    <div className="quiz-container">
      <h1>Part of speech test</h1>
      {!showResult ? (
        <div>
          <Progressbar answered={active} /> {/* the progress bar */}
          <span>{active + 1}</span> From <span>{props.q.length}</span>
          {/* question number  */}
          {/* the question with word  */}
          <h2>
            what category this word{" "}
            <span className="word">{"'" + props.q[active].word + "'"}</span>{" "}
            belongs to ?
          </h2>{" "}
          {/* the four option to select answer */}
          <div className="options">
            <button
              onClick={() => onAnswerSelected("noun", 1)}
              className={
                selectedAnswerIndex == 1
                  ? props.q[active].pos == "noun"
                    ? "selected-answer"
                    : "wrong"
                  : ""
              }
            >
              noun
            </button>

            <button
              onClick={() => onAnswerSelected("adverb", 2)}
              className={
                selectedAnswerIndex == 2
                  ? props.q[active].pos == "adverb"
                    ? "selected-answer"
                    : "wrong"
                  : ""
              }
              disabled={selectedAnswerIndex != null}
            >
              adverb
            </button>

            <button
              onClick={() => onAnswerSelected("adjective", 3)}
              className={
                selectedAnswerIndex == 3
                  ? props.q[active].pos == "adjective"
                    ? "selected-answer"
                    : "wrong"
                  : ""
              }
              disabled={selectedAnswerIndex != null}
            >
              adjective
            </button>

            <button
              onClick={() => onAnswerSelected("verb", 4)}
              className={
                selectedAnswerIndex == 4
                  ? props.q[active].pos == "verb"
                    ? "selected-answer"
                    : "wrong"
                  : ""
              }
              disabled={selectedAnswerIndex != null}
            >
              verb
            </button>
            {/* Next or finish button */}
            <button
              className="sub"
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {active === props.q.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          {/* the result screen after finish the test  */}
          <h2>your rank across your peers</h2>
          <Rank score={score * 10} />
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}

Question.propTypes = {
  q: PropTypes.array.isRequired,
};

export default Question;
