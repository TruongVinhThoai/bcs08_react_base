import React, { Component } from "react";

export default class DemoState extends Component {
  state = { number: 0, username: "alice" };

  // this.setState

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1,
    });
    console.log("tang");
    console.log(this.state.number);
  };
  handleDescrease = () => {
    this.setState({
      number: this.state.number - 1,
    });
    console.log("giam");
  };

  handleChangeName = (name) => {
    this.setState({
      username: name,
    });
  };

  // event handling: co tham so, khong co tham so

  render() {
    return (
      <div className="text-center">
        <button onClick={this.handleDescrease} className="btn btn-danger">
          -
        </button>
        <span className="mx-5 display-2">{this.state.number}</span>
        <button onClick={this.handleIncrease} className="btn btn-info">
          +
        </button>
        {/* Toan tu 3 ngoi */}
        <h2
          className={`display-4
            ${
              this.state.username == "Alice" ? "text-primary" : "text-secondary"
            }`}
        >
          {this.state.username}
        </h2>
        {/* Ham co tham so: boc lai bang arrow function */}
        <button
          onClick={() => {
            this.handleChangeName("Bob");
          }}
          className="btn btn-secondary"
        >
          Change to Bob
        </button>
        <button
          onClick={() => {
            this.handleChangeName("Alice");
          }}
          className="btn btn-primary"
        >
          Change to Alice
        </button>
      </div>
    );
  }
}
