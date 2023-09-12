import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_TO_CART, VIEW_DETAIL } from "./constant/shoeConstant";

class ItemShoe extends Component {
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
                this.props.handleAddShoe(this.props.item);
              }}
            >
              Add
            </button>
            <button
              className="btn btn-info"
              onClick={() => {
                this.props.handleViewDetail(this.props.item);
              }}
            >
              View
            </button>
          </p>
        </div>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleViewDetail: (shoe) => {
      let action = {
        type: VIEW_DETAIL,
        payload: shoe,
      };
      dispatch(action);
    },
    handleAddShoe: (shoe) => {
      let action = {
        type: ADD_TO_CART,
        payload: shoe,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(ItemShoe);
