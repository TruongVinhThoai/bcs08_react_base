import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { image, name } = this.props.item;
    return (
      <div className="card text-left col-4">
        <img className="card-img-top" src={image} />
        <div className="card-body p-0">
          <small className="card-title">{name}</small>
          <p className="card-text">
            <button
              className="btn btn-primary mr-2"
              onClick={() => {
                this.props.handleAddListShoe(this.props.item);
              }}
            >
              Add
            </button>
            <button className="btn btn-info">View</button>
          </p>
        </div>
      </div>
    );
  }
}
