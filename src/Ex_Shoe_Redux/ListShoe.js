import React, { Component } from "react";
import ItemShoe from "./ItemShoe";
import { connect } from "react-redux";

class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.shoeArr.map((shoe, index) => {
      return (
        <ItemShoe
          // handleAddListShoe={this.props.handleAddShoe}
          item={shoe}
          key={index}
        />
      );
    });
  };
  render() {
    return <div className="col-6 row">{this.renderListShoe()}</div>;
  }
}

let mapStateToProps = (state) => {
  return {
    shoeArr: state.shoeReducer.shoeArr,
  };
};

export default connect(mapStateToProps)(ListShoe);
