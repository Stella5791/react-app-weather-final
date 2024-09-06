import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather ">
      <form className="search-form">
        <div class="input-group mb-3">
          <input
            type="search"
            placeholder="Enter a city"
            className="form-control"
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
