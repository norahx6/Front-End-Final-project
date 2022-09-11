import { Button } from '@mui/material';
import { useState } from "react";
import "./Question.css";
import { useNavigate } from 'react-router-dom';
import Error from '../components/Error';

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {

  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const navigate=useNavigate();
 
  const gotoQuiz=()=>{
    navigate('/Result');
  }


  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
  setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const Next = () => {
    if (currQues > 8) {
        gotoQuiz();
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else setError("You forgot to choose your answer");
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions(); 
  };

  return (
    <div className="question">
    <h1>Question {currQues + 1}: </h1>

    <div className="singleQuestion">
    <h2>{questions[currQues].question}</h2>

    <div className="options">
    {error && <Error>{error}</Error>} {options && options.map((i) => (

    <button className={`singleOption  ${selected && handleSelect(i)}`}
    key={i} onClick={() => handleCheck(i)} disabled={selected} >{i}
    </button>))}
        
    </div>
    <div className="controls">
        <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
          Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={Next}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;