import React, {useState} from "react";
import axios from "axios";
function App() {

  const [data, setData] =  useState( {} );
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=dc39337e88245a0f3f4fb330ecbe5ccf`;

  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(url).then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      setLocation("")
    }
  }

  const handleChange = (event) => {
    setLocation(event.target.value)
  }

  return (
    <div className="app">
      <div className="search">
            <input  
            onChange={handleChange}
            onKeyDown={searchLocation}
            placeholder="Enter Location"
            type="text"
            value={location}
            />
      </div>
       <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p> 
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="icon">
          {data.weather ? <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="" /> : null}
          </div>
          <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name != undefined && 
            <div className="bottom">
            <div className="feels">
              {data.main ?  <p className="bold"> {data.main.feels_like.toFixed()}°F</p> : null }  
              <p>Feels Like</p>
            </div>
            <div className="humidity">
            {data.main ?  <p className="bold"> {data.main.humidity}</p> : null }  
              <p>humidity</p>
            </div>
            <div className="wind">
            {data.wind ?  <p className="bold"> {data.wind.speed}</p> : null }  
              <p>wind speed</p>
            </div>
          </div>
        }
        
       </div>
    </div>
  );
}

export default App;
