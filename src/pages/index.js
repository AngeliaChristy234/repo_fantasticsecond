import { Helmet } from "react-helmet"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { LayoutBtn, WhatsappBtn } from '../components/buttons'
import { body } from '../styles/reusable'

import Layout from "../components/layout"
import SEO from "../components/seo"
import content from '../content/homepage.content'

import './app.css';

import Banner from '../components/banner'
import Card3 from '../components/card-3'
import Card3_Price from '../components/card-3-price'
import Desc2 from '../components/description-2'
import DescImg from '../components/description-img'
import StepsVertical from '../components/steps-V'

import { Row, Col } from 'antd'

const Styles = ({
  body: css(body)
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Helmet>
      <meta charSet="UTF-8"></meta>
      <title>{content.seo.title}</title>
      <meta name="description" content={content.seo.desc}/>
    </Helmet>

    <Banner content={content.banner}/>

    <div css={Styles.body}>
      <div>
        <Card3         content={content.card}    />
        <Row span={[8, 12]}>
          <Col xs={24} sm={12}><LayoutBtn/></Col>
          <Col xs={24} sm={12}><WhatsappBtn/></Col>
        </Row>
      </div>
       
      <Card3_Price   content={content.card_2}  />
      <StepsVertical content={content.stepsV}  /> <WhatsappBtn/>
      <DescImg       content={content.descImg} /> <WhatsappBtn/>
      <Desc2         content={content.desc2}   />
    </div>
  </Layout>
)

export default IndexPage
