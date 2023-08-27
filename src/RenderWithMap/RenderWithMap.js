import React, { Component } from "react";
import { movieArr } from "./data";

// react state, setState

export default class RenderWithMap extends Component {
  renderListMovie = () => {
    return movieArr.map(({ hinhAnh, tenPhim, moTa }, index) => {
      return (
        <div key={index} className="card text-left col-3">
          <img className="card-img-top" src={hinhAnh} />
          <div className="card-body">
            <h4 className="card-title">{tenPhim}</h4>
            <p className="card-text">{moTa}</p>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListMovie()}</div>;
      </div>
    );
  }
}
