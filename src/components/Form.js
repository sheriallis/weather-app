import React from "react";

function Form(props){
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="query" placeholder="City..." />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default Form;
