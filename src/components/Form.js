import React from "react";

class Form extends React.Component {
  render(props) {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City..." />
        <button type="submit">GET WEATHER</button>
      </form>
    );
  }
}

export default Form;
