import React, { Component } from "react";
import ImageCar from "./ImageCar";
import ButtonColor from "./ButtonColor";

export default class Ex_Car_v2 extends Component {
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
        <ImageCar imagePath={imgPath} />
        <div className="col-8 mt-5">
          <ButtonColor handleChange={this.handleChangeColor} color="red" />
          <ButtonColor handleChange={this.handleChangeColor} color="black" />
          <ButtonColor handleChange={this.handleChangeColor} color="silver" />
        </div>
      </div>
    );
  }
}
