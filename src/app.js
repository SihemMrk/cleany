import React from "react";
const axios = require("axios");

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState = {
      value: this.target.value
    };
    axios.post("/words", { value }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  }

  render() {
    return (
      <div>
        <h1>Chercher un mot</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Rechercher" />
        </form>
      </div>
    );
  }
}
