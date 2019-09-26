import React from "react";
const axios = require("axios");

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.name.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState = {
      name: this.target.name.value
    };
    axios.post("/words", { name }).then(res => {
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
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Rechercher" />
        </form>
      </div>
    );
  }
}
