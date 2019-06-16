import React from "react";

function WeatherInfo(props){
  const {city, icon, temp, country, feelslike_c, condition, forecast, wind_kmh, humidity, sunrise, sunset} = props;

  return (
    <div className="Wrapper">
      {city && (
        <div className="mainWeatherInfo">
          <img src={`${icon}`} alt="" />
          <p className="temp">{temp}°C</p>
          <p className="city">{city}</p>
          <p className="country">{country}</p>
        </div>
      )}

      {city && (
        <div className="additionalInfo">
          <p>
            <span>Feels like:</span> {feelslike_c}
          </p>

          <p>
            <span>Condition:</span> {condition}
          </p>

          <p>
            <span>Forecast:</span> {forecast}
          </p>
          <p>
            <span>Wind (km/h):</span> {wind_kmh}
          </p>
          <p>
            <span>Humidity:</span> {humidity}
          </p>

          <p>
            <span>Sunrise:</span> {sunrise}
          </p>

          <p>
            <span>Sunrise:</span> {sunset}
          </p>
        </div>
      )}
    </div>
  );
}

export default WeatherInfo;
