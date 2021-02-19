import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'
import styled from "styled-components";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      axios
      .get('https://api.nasa.gov/planetary/apod?api_key=JSc8agsqyVjYo2kt7mPxqJi1jYnpOLEDXgeiTYfC')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
    }, []);

    console.log(data);
  return (
    <div className="App">
      <StyledApp>
      <h1>Pic of the Day {data.date}</h1>
      
      <img src={data.url} alt="pic of the day"/>

      <p>
        Here is the pic of the day.
      </p>
        
        </StyledApp>
    </div>
  );
}

const StyledApp = styled.div`
  
  h1{
    justify-content: center;
    color: royalblue;
    
    &:hover{
      color: teal;
      transition: all 0.5s ease-in-out;
    }

    p {
      display: flex;
      padding: 10px;
      margin: 0;
      justify-content: right;
      align-content: right;
    }
  }
  
  img {
    justify-content: left;
    display: flex;
    padding: 1%;
    margin: 10px;
  }
`

export default App;