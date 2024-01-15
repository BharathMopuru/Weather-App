import React, {useState} from "react";
import axios from "axios";
function App() {

  const [data, setData] =  useState( {} );
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=dc39337e88245a0f3f4fb330ecbe5ccf`;
  

  return (
    <div className="app">
       <div className="container">
        <div className="top">
          <div className="location">
            <p>dallas</p> 
          </div>
          <div className="temp">
            <h1>60°F</h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">65°F</p>
            <p>Fells like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 mph</p>
            <p>wind speed</p>
          </div>
        </div>
       </div>
    </div>
  );
}

export default App;
