import React from "react";

function Form(props){
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City..." />
      <button type="submit">GET WEATHER</button>
    </form>
  );
}

export default Form;
