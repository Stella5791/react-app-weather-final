import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="overview">
        <h1 className="place text-left">{props.data.city}</h1>

        <div className="row overview-info">
          <div className="col-6 current-temperature">
            <div className=" d-flex temperature">
              <div className="d-flex">
                <span className="units">
                  <WeatherTemperature celsius={props.data.temperature} />
                </span>
                <span>
                  <WeatherIcon code={props.data.icon} size={52} />
                </span>
              </div>
            </div>
          </div>
          <div className="col-6 pb-3 info">
            <p>
              <div>
                <FormattedDate date={props.data.date} />
              </div>
              <div>
                <strong>
                  {" "}
                  <em>{props.data.description}</em>{" "}
                </strong>
              </div>
              <div>Humidity: {props.data.humidity}%</div>
              <div>Wind: {props.data.wind}km/h</div>
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
