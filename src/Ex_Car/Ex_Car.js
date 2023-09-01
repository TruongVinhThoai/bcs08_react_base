import React, { Component } from "react";

export default class Ex_Car extends Component {
  state = {
    color: "steel",
  };
  handleChangeColor = (colorCar) => {
    this.setState({
      color: colorCar,
    });
  };
  render() {
    let imgPath = `./resource/CarBasic/products/${this.state.color}-car.jpg`;
    return (
      <div className="row ">
        <img src={imgPath} alt="" className="col-4" />
        <div className="col-8 mt-5">
          <button
            onClick={() => {
              this.handleChangeColor("red");
            }}
            className="btn btn-danger"
          >
            Red
          </button>
          <button
            onClick={() => {
              this.handleChangeColor("black");
            }}
            className="btn btn-dark mx-5"
          >
            Black
          </button>
          <button
            onClick={() => {
              this.handleChangeColor("silver");
            }}
            className="btn btn-secondary"
          >
            Silver
          </button>
        </div>
      </div>
    );
  }
}
