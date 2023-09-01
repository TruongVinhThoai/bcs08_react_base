import React, { Component } from "react";

export default class ButtonColor extends Component {
  render() {
    let { colorBtn, activeColorBtn } = this.props;
    let isActive = colorBtn == activeColorBtn;
    return (
      <button
        onClick={() => {
          this.props.handleChange(colorBtn);
        }}
        style={{
          background: colorBtn,
          transform: `scale(${isActive ? 2 : 1})`,
          transition: "1.5s",
        }}
        className="btn text-white mx-4"
      >
        {colorBtn}
      </button>
    );
  }
}
