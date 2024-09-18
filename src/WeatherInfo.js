import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row WeatherInfo overview">
        <div className=" col-6 overview-info ">
          {" "}
          <h1 className="place text-left">{props.data.city}</h1>
          <div className="date">
            <FormattedDate date={props.data.date} />
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex">
            <WeatherIcon code={props.data.icon} size={64} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
      <div className="row">
        <ul>
          <li>
            <strong>
              {" "}
              <em>{props.data.description}</em>{" "}
            </strong>
          </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
}
