import React from "react";
import Person from './Person'
import "./App.css";

class App extends React.Component {
  state = {
    lastName: "",
    dob: "",
    age: "",
    phone: "",
    gender: "",
    fields: []
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { lastName, dob, age, phone, gender } = this.state;
    const user = { lastName, dob, age, phone, gender };
    this.setState({ fields: [...this.state.fields, user] });
  };

  render() {
    
    return (
      <div>
        <form action="">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <input
            type="text"
            name="dob"
            placeholder="DOB"
            value={this.state.dob}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={this.state.phone}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <input
            type="select"
            name="gender"
            placeholder="Gender"
            value={this.state.gender}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <button onClick={e => this.handleSubmit(e)}>Submit</button>
        </form>
        <div>
          {this.state.fields.map(person => (
            <Person key={person.dob} personData={person} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
