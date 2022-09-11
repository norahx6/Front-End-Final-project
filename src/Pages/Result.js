import { Button } from '@mui/material';
import { useEffect } from "react";
import "./Result.css";

const Result = ({ name, score }) => {


  useEffect(() => {
    if (!name) {  
    }
  }, [name]);

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
      Go To Homepage
      </Button>
    <img src="party.svg" className="imgs" alt="party img"/>
    </div>
  );
};

export default Result;