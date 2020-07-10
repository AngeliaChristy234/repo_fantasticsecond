import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import LayoutSide from "../components/layout_side"
import SEO from "../components/seo"

import './app.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Helmet>
      <meta charSet="UTF-8"></meta>
      <title>Angel's bakery</title>
    </Helmet>
  </Layout>
)

export default IndexPage
