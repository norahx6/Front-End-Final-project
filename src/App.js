import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';

function App() {

  const[name,setName]=useState();
  const[questions,setQuestions]=useState();
  const[score,setScore]=useState(0);


  const check = async (category = "", difficulty = "") => {
  const { data } = await axios.get(
    `https://opentdb.com/api.php?amount=10${category && `&category=${category}` }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };

  

return(


<BrowserRouter>
<div className='App'>
<Header/>

<Routes>
  <Route path='/' element={<Home name={name} setName={setName} check={check} />} />
  <Route path='/Quiz' element={<Quiz name={name} questions={questions} setQuestions={setQuestions} score={score} setScore={setScore}/>} />
  <Route path='/Result' element={<Result name={name}  score={score} />} />



 


</Routes>



</div>
</BrowserRouter>
  );
}

export default App;
