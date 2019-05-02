import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Form from "./components/Form";
import Weather from "./components/Weather";

import "./styles.css";

const API_KEY = "2bff64b3cf314b878d0122534171003";

class WeatherApp extends React.Component {
  state = {
    city: undefined,
    region: undefined,
    country: undefined,
    temp: undefined,
    feelslike_c: undefined,
    condition: undefined,
    icon: undefined,
    wind_kph: undefined,
    humidity: undefined,
    unsplash: undefined,
    forecast: undefined,
    sunrise: undefined,
    sunset: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await axios.get(
      `https://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${city}`
    );
    const response = await api_call;
    const data = response.data;

    this.setState({
      city: data.location.name,
      region: data.location.region,
      country: data.location.country,
      temp: data.current.temp_c,
      feelslike_c: data.current.feelslike_c,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      wind_kph: data.current.wind_kph,
      humidity: data.current.humidity,
      forecast: data.forecast.forecastday[0].day.condition.text,
      sunrise: data.forecast.forecastday[0].astro.sunrise,
      sunset: data.forecast.forecastday[0].astro.sunset
    });

  };

  componentDidMount() {
    this.getWeather();
  }

  render() {
    const state = this.state;

    return (
      <div className="WeatherApp">
        <img src="img/undraw_dreamer.svg" className="headerImg" alt="" />
        <Form getWeather={this.getWeather} />

        <Weather
          city={state.city}
          region={state.region}
          country={state.country}
          temp={state.temp}
          feelslike_c={state.feelslike_c}
          condition={state.condition}
          icon={state.icon}
          wind_kph={state.wind_kph}
          humidity={state.humidity}
          unsplash={state.unsplash}
          forecast={state.forecast}
          sunrise={state.sunrise}
          sunset={state.sunset}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WeatherApp />, rootElement);
