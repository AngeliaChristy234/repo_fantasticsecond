import { Helmet } from "react-helmet"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { WhatsappBtn } from '../components/buttons'
import { body } from '../styles/reusable'

import Layout from "../components/layout"
import SEO from "../components/seo"
import content from '../content/portfolio.content'

import './app.css';
import Desc2 from '../components/description-2'

const Styles = ({
  body: css(body)
})

const PortfolioPage = () => (
  <Layout>
    <SEO title="Contoh website"/>
    <Helmet>
      <meta charSet="UTF-8"></meta>
      <title>{content.seo.title}</title>
      <meta name="description" content={content.seo.desc}/>
    </Helmet>

    <div css={Styles.body}>
      <Desc2 content={content} />
    </div>

    <WhatsappBtn/>
  </Layout>
)

export default PortfolioPage
