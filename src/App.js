import React, {useEffect, useState} from "react";
import "./App.css";
import axios from 'axios'

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
      <h1>Pic of the Day {data.date}</h1>

        <img src={data.hdurl} alt="pic of the day"/>

    </div>
  );
}

export default App;