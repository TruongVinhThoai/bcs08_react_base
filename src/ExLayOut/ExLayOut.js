// tao 4 file trong ex va import vao ex

import React, { Component } from "react";
import Content from "./Content";
import Navigate from "./Navigate";
import Header from "./Header";
import Footer from "./Footer";

export default class ExLayOut extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-4 p-0">
            <Navigate />
          </div>
          <div className="col-8 p-0">
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

// npm start
// sau khi clone source => npm i
