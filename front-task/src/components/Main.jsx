import { useEffect, useState } from "react";
import Question from "./Question";

const Main = () => {
  const [questions, setQuestions] = useState([]);
//fetch  data from the api and set it to the state and then send it to the Question component
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/words");
        const json = await response.json();
        setQuestions(json.list);
        console.log(json.list);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
     questions.length > 0 ?<Question q={questions} /> : <p>Loading...</p>
  )
};

export default Main;
