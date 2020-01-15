import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    value: ""
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
