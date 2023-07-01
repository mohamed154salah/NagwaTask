import {useEffect,useState} from 'react'
import PropTypes from 'prop-types'
//this component take the score and send it to the api to calculate the rank
function Rank(props) {
const score = props.score;
  const [rank, setRank] = useState(0);

  useEffect(()=>{
   const fetchData = async () => {
     try {
       const response = await fetch("http://localhost:8000/api/rank", {
         method: "POST",
         headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ score }),
       });
       const json = await response.json();
       setRank(json);
     } catch (error) {
       console.log("error", error);
     }
   };

   fetchData();


  },[score])

  return (
    <div>{rank} %</div>
  )
}

Rank.propTypes = {
score:PropTypes.number.isRequired,
}

export default Rank
