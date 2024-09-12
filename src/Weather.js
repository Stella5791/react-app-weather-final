import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready){
  return (
    <div className="Weather ">
      <form onSubmnit={handleSubmit}>
        <div class="input-group mb-3">
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control"
            autofocus="on"
            onChange={handleCityChange}
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary button"
            type="submit"
            value="search"
          >
            <strong>Search</strong>
          </button>
        </div>
      </form>
      <WeatherInfo data={weatherData}/>
      <WeatherForecast coordinates={weatherData.coordinates}/>
;
    else{
search ( );
return "Loading...";
    }
    
      
      <hr />
      <div className="overview">
        <h1 className="place text-left">Cordoba</h1>

        <div className="row overview-info">
          <div className="col-6 current-temperature">
            <div className=" d-flex temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="cloudy"
              />
              <div className="d-flex">
                <strong>xx</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6 pb-3 info">
            <p>
              <div>Last updated: 4520</div>
              <div>
                <strong>
                  {" "}
                  <em>Cloudy</em>{" "}
                </strong>
              </div>
              <div>Humidity:%</div>
              <div>Wind: km/h</div>
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
}
