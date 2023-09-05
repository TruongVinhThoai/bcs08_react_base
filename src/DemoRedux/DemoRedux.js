import React, { Component } from "react";
import { connect } from "react-redux";

class DemoRedux extends Component {
  render() {
    console.log("testtttt", this.props);
    return (
      <div>
        <button onClick={this.props.handleGiam} className="btn btn-danger">
          -
        </button>
        <strong>{this.props.number}</strong>
        <button onClick={this.props.handleTang} className="btn btn-info">
          +
        </button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    number: state.quantity,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleTang: () => {
      let action = {
        type: "tang",
      };
      dispatch(action);
      console.log("tang tang");
    },
    handleGiam: () => {
      let action = { type: "giam", payload: 3 };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);
