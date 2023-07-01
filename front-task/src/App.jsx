import './App.css'
import  Main  from './components/Main'
import  Start  from './components/Start'
import {  Routes, Route } from "react-router-dom";
function App() {



  return (
    <>
    <div className="card">
          <Routes>
            <Route path="/" element={<Start/>} />
            <Route path="/main" element={ <Main/>} />
          </Routes>
      </div>
    </>
  );
}

export default App
