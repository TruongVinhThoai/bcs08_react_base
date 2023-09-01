import React, { Component } from "react";

export default class ImageCar extends Component {
  render() {
    let { imagePath } = this.props;
    return <img src={imagePath} alt="" className="col-4" />;
  }
}
