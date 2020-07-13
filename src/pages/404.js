import { Link } from 'gatsby'
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{height: '62vh', paddingTop: '10rem'}}>
      <h1>Halaman tidak ditemukan</h1>
      <Link href='/'>Kembali ke halaman utama</Link>
    </div>
  </Layout>
)

export default NotFoundPage
