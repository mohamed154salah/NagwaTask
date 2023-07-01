import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../App.css";

//this component take the number of answered questions and render progress bar for us

// eslint-disable-next-line react/prop-types
export default function Progressbar({ answered }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
  //the equation is calculate the percentage of answered questions
    setProgress((answered / 10) * 100);
  }, [answered]);

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}>
        {progress}%
      </div>
    </div>
  );
}
Progressbar.prototype = {
  answered: PropTypes.number.isRequired,
};
