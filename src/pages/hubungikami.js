import { Helmet } from "react-helmet"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { styleColors, styleFonts, styleSpacing } from '../styles/abstract'
import { mq } from '../styles/mediaQueries'
import { body } from '../styles/reusable'
import { hoverTrans } from '../styles/utils'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { absContent } from '../content/abs.content'

import './app.css';

import { InstagramOutlined, MailOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { Row, Col } from 'antd'

const Styles = css(body, {
  height: '60vh',

  '& .ant-row': {
    textAlign: 'center',
    fontSize: styleFonts.sizeSmall,
    listStyle: 'none',
    cursor: 'pointer',

    '& .box': {
      ...hoverTrans,
      padding: styleSpacing.spacingSmall,
      border: `1px solid ${styleColors.grayMed}`,

      '& svg': {
        width: 'auto',
        height: styleSpacing.spacingBig,
        marginBottom: styleSpacing.spacingSmall  
      },
  
      '& h4': {
        fontSize: styleFonts.sizeMedium,
        fontWeight: styleFonts.weightLight
      }
    }
  },

  '& > *': {
    marginTop: styleSpacing.spacingBig
  },

  [mq[2]]: {
    '& h1': {
      marginBottom: styleSpacing.spacingBig
    },

    '& .ant-row': {
      '& .box': {
        '& svg': {
          height: styleSpacing.spacingMedium
        },
    
        '& h4': {
          fontSize: styleFonts.sizeSmall
        }
      }
      
    }
  }

})

const ContactPage = () => (
  <Layout>
    <SEO title="Contact us"/>
    <Helmet>
      <meta charSet="UTF-8"></meta>
      <title>Landing page sederhana</title>
    </Helmet>

    <div css={Styles}>
      <h1>Kontak kami</h1>
      <Row justify='center' gutter={[12, 24]}>
        <Col xs={24} sm={8}>
          <div className='box' onClick={() => window.open(`mailto:${absContent.email}`)}>
            <MailOutlined/> 
            <h4>{absContent.email}</h4>
          </div>
        </Col>
        <Col xs={24} sm={8}>
          <div className='box' onClick={() => window.open(`https://www.instagram.com/${absContent.instagram}`)}>
            <InstagramOutlined/>
            <h4>@ {absContent.instagram}</h4>
          </div>
        </Col>
        <Col xs={24} sm={8}>
          <div className='box' onClick={() => window.open(absContent.whatsappLink)}>
            <WhatsAppOutlined/>
            <h4>{absContent.whataspp}</h4>
          </div>
        </Col>
      </Row>
    </div>
  </Layout>
)

export default ContactPage