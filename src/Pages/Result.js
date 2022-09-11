import { Button } from '@mui/material';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Result.css";

const Result = ({ name, score }) => {
  const navigate=useNavigate();
 
  const gotoHome=()=>{
    navigate('/');
  }

  useEffect(() => {
    if (!name) {
      gotoHome();
    }
  }, [name,gotoHome]);

  return (
    <div className="result">
      <span className="score">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    <img src="party.svg" className="imgs" alt="party img"/>
    </div>
  );
};

export default Result;