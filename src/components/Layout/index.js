import React, { Component } from "react";

import "./index.scss";
import Header from "../Header";

class Layout extends Component {
  render() {
    const { location, children } = this.props;

    return (
      <>
        <Header />
        {children}
      </>
    );
  }
}

export default Layout;
