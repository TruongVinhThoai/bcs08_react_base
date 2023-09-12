import React, { Component } from "react";
import { connect } from "react-redux";

class DetailShoe extends Component {
  renderDetail = () => {
    let { image } = this.props.detailShoe;
    return (
      <div>
        <img width={350} src={image} alt="" />
      </div>
    );
  };
  render() {
    return <div className="container">{this.renderDetail()}</div>;
  }
}
let mapStateToProps = (state) => {
  return {
    detailShoe: state.shoeReducer.detail,
  };
};

export default connect(mapStateToProps)(DetailShoe);
