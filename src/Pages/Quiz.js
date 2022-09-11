import { useEffect, useState } from "react";
import { CircularProgress, } from '@mui/material';

import "./Quiz.css"
import Question from "./Question";


const Quiz=({name, questions,setQuestions,score,setScore}) => {

const [options,setOptions]=useState();
const [currQues,setCurrQues]=useState(0);

useEffect(() => {
  console.log(questions)

  setOptions(questions && 
  handleAnswer([
  questions[currQues]?.correct_answer ,
  ...questions[currQues]?.incorrect_answers,
  ]));

  },[questions,currQues])

  console.log(options);
  const handleAnswer = (option ) => {
    return option.sort(() => Math.random() -0.5);
  };

  return(
    
  <div className='Quiz'>
    <span className="title"> Welcome {name} </span>


    { questions ? (
    <>
    <div className="QuizInfo">
     
    <span>Score = {score} </span>
    <span>{questions[currQues].category}</span>
      
      </div>

          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            
          />
      


    </> ): (<CircularProgress style={{ margin: 150 }} size={45} thickness={5} /> )
    }


  </div> 
    );
  };
    
  export default Quiz;
    