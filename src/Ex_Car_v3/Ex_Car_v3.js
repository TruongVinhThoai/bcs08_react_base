import React, { Component } from "react";
import ImageCar from "./ImageCar";
import ButtonColor from "./ButtonColor";

export default class Ex_Car_v3 extends Component {
  state = {
    color: "steel",
    colorArr: ["red", "black", "silver"],
  };
  handleChangeColor = (colorCar) => {
    this.setState({
      color: colorCar,
    });
  };
  renderButtonList = () => {
    return this.state.colorArr.map((item) => {
      return <ButtonColor handleChange={this.handleChangeColor} color={item} />;
    });
  };
  render() {
    let imgPath = `./resource/CarBasic/products/${this.state.color}-car.jpg`;
    return (
      <div className="row ">
        <ImageCar imagePath={imgPath} />
        <div className="col-8 mt-5">{this.renderButtonList()}</div>
      </div>
    );
  }
}
