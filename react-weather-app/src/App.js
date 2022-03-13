import './App.css';
import Title from "./components/Title";
import Form from "./components/Form";
import Results from './components/Results';
import {useState} from "react";
import axios from "axios";

function App() {
  const [city,setCity]=useState("");

  const[resules,setResults]=useState({
    country:"",
    cityName:"",
    temperature:"",
    conditionText:"",
    icon:""
  });

  const getWwather=(e)=>{
      e.preventDefault();
      axios.get(`https://api.weatherapi.com/v1/current.json?key=01a5bed284754df482821227212110&q=${city}&aqi=no`)
      .then(res=>{
        setResults({
          country:res.data.location.country,
          cityName:res.data.location.name,
          temperature:res.data.current.temp_c,
          conditionText:res.data.current.condition.text,
          icon:res.data.current.condition.icon
        })
      })
     }  
 
  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWwather={getWwather}/>
      <Results resules={resules}/>
    </div>
  );
}

export default App;
