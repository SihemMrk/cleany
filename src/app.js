import React from "react";
const axios = require("axios");

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const name = {
      name: this.state.name
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
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Rechercher" />
        </form>
      </div>
    );
  }
}
