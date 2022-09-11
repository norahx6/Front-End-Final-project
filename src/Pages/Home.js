import { Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../components/Error";
import Categories from "../d/categories";
import "./Home.css"



function Home({name,setName,check}) {

  const gotoQuiz=()=>{
    navigate('/Quiz');
  }

  const[category,setCategory]=useState("");
  const[difficulty,setDifficulty]=useState("");
  const [error, setError] = useState(false);
  const navigate=useNavigate();

  const submitError = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      check(category, difficulty);
      gotoQuiz();
    }
  };

return(
<>
<div className='Home'> 

<div className="span" >
<span>Quiz Settings</span>

<div className="selects">
{error && <Error>Please Fill all the feilds</Error>}

<TextField  label='Enter Your Name' variant="outlined" 
onChange={(e)=> setName(e.target.value)} value={name} />


<TextField select label='Select Category' variant="outlined"
onChange={(e)=> setCategory(e.target.value)} value={category}
>
{Categories.map((c)=>(
<MenuItem key={c.category} value={c.value}>{c.category}
</MenuItem>
))}
</TextField>

<TextField select label='Select Difficulty' variant="outlined"
onChange={(e)=>setDifficulty(e.target.value)} value={difficulty} >
<MenuItem key="Easy" value="easy"> Easy </MenuItem>
<MenuItem key="Medium" value="medium">Medium </MenuItem>
<MenuItem key="Hard" value="hard">Hard</MenuItem>
</TextField> 

<Button variant="contained" color="primary" onClick={submitError}> Start Quiz  </Button>


</div>
</div>
<img src="question.svg" className="img" alt="question img"/>
</div>
</>);
}

export default Home;
