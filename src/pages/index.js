import React, { Component } from "react";
import "./index.scss";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";

class index extends Component {
  render() {
    return (
      <>
        <Helmet title={this.props.data.site.siteMetadata.title} />
        <Layout>
          <div>index</div>
        </Layout>
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
