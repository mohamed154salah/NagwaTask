import { Link } from 'react-router-dom';
import '../App.css';
//this component is the start page
export default function Start() {
  return (
    <div>
      <h1>Part of speech test</h1>
      <Link to="/main" className='start'>Start</Link>
    </div>
  );
}
