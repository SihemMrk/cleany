import React from "react";
const axios = require("axios");

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      output: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const input = this.state.input;
    axios.post("/words", { input }).then(res => {
      this.setState({ output: res.data });
    });
  }

  render() {
    return (
      <div id="container">
        <h1>Chercher un mot</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="text"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input className="submit" type="submit" value="Rechercher" />
        </form>
        <h2>{this.state.output}</h2>
      </div>
    );
  }
}
