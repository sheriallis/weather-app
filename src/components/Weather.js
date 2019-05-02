import React from "react";

class Weather extends React.Component {
  render() {
    const props = this.props;

    return (
      <div className="Wrapper">
        {props.city && (
          <div className="mainWeatherInfo">
            <img src={`${props.icon}`} alt="" />
            <p className="temp">{props.temp}°C</p>
            <p className="city">{props.city}</p>
            <p className="country">{props.country}</p>
          </div>
        )}

        {props.city && (
          <div className="additionalInfo">
            <p>
              <span>Feels like:</span> {props.feelslike_c}
            </p>

            <p>
              <span>Condition:</span> {props.condition}
            </p>

            <p>
              <span>Forecast:</span> {props.forecast}
            </p>
            <p>
              <span>Wind (km/h):</span> {props.wind_kmh}
            </p>
            <p>
              <span>Humidity:</span> {props.humidity}
            </p>

            <p>
              <span>Sunrise:</span> {props.sunrise}
            </p>

            <p>
              <span>Sunrise:</span> {props.sunset}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Weather;
