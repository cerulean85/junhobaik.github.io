import React, { Component } from "react";
import "./index.scss";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

class index extends Component {
  render() {
    return (
      <>
        <Helmet title={this.props.data.site.siteMetadata.title} />
        <div id="index">index</div>
      </>
    );
  }
}

export default index;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
