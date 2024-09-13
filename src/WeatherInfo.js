import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1 className="place text-left">Cordoba</h1>
        <FormattedDate date={weatherData} />
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
