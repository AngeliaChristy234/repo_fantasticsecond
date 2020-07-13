import { Helmet } from "react-helmet"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { WhatsappBtn } from '../components/buttons'
import { body } from '../styles/reusable'

import Layout from "../components/layout"
import SEO from "../components/seo"
import content from '../content/layanan.content'

import './app.css';

import Card3_Price from '../components/card-3-price'
import Desc2 from '../components/description-2'
import StepsVertical from '../components/steps-V'

const Styles = ({
  body: css(body)
})

const IndexPage = () => (
  <Layout>
    <SEO title="Layanan"/>
    <Helmet>
      <meta charSet="UTF-8"></meta>
      <title>{content.seo.title}</title>
      <meta name="description" content={content.seo.desc}/>
    </Helmet>

    <div css={Styles.body}>
      <Card3_Price   content={content.card}  />
      <Desc2         content={content.desc}   />
      <StepsVertical content={content.steps} />
    </div>

    <WhatsappBtn/>
  </Layout>
)

export default IndexPage
