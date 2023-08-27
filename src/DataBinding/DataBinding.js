import React, { Component } from "react";

export default class DataBinding extends Component {
  username = "VinhThoai";
  render() {
    let avatar =
      "https://pre00.deviantart.net/41d7/th/pre/i/2014/290/1/9/alice_in_chaosland_by_xsecretgirl-d836514.png";

    return (
      <div>
        <div
          className="card text-left"
          style={{ width: "300px", backgroundColor: "blue" }}
        >
          <img className="card-img-top" src={avatar} alt />
          <div className="card-body">
            <h4 className="card-title">{this.username}</h4>
            <p className="card-text">Body</p>
          </div>
        </div>
      </div>
    );
  }
}
