import { Helmet } from "react-helmet"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { DividerTitle } from '../components/divider'
import { ScrollBtn, WhatsappBtn } from '../components/buttons'

import Styles from '../styles/pageStyles/layout.styles'
import { styleColors, styleFonts, styleSpacing } from '../styles/abstract'
import { body } from '../styles/reusable'

import { CheckCircleOutlined } from '@ant-design/icons'
import { Row, Col, Skeleton, Card, Steps } from 'antd'

import Layout from "../components/layout"
import SEO from "../components/seo"
import content from '../content/layout.content'

import './app.css';

const { Step } = Steps;

const pageStyles = css(body, {
  '& h2': {
    marginTop: styleSpacing.spacingHuge,
    fontSize: styleFonts.sizeBig,
    textTransform: 'capitalize',
    color: styleColors.primary
  },

  '& .head': {
    '& button': {
      width: '100%'
    }
  }
})

const LayoutPage = () => (
  <Layout>
    <SEO title="Layout"/>
    <Helmet>
      <meta charSet="UTF-8"></meta>
      <title>{content.seo.title}</title>
      <meta name="description" content={content.seo.desc}/>
    </Helmet>

    <div css={pageStyles}>
      <div className='head'>
        <h1>{content.heading}</h1>
        <Row gutter={[12, 12]} justify="center">
          <Col xs={8} sm={4}>
            <ScrollBtn name={content.header.heading} target='lay_header' offset={-250}/>
          </Col>
          <Col xs={8} sm={4}>
            <ScrollBtn name={content.banner.heading} target='lay_banner' offset={-250}/>
          </Col>       
          <Col xs={8} sm={4}>
            <ScrollBtn name={content.rows.heading} target='lay_rows' offset={-250}/>
          </Col>          
          <Col xs={8} sm={4}>
            <ScrollBtn name={content.card.heading} target='lay_card' offset={-250}/>
          </Col>       
          <Col xs={8} sm={4}>
            <ScrollBtn name={content.description.heading} target='lay_desc' offset={-250}/>
          </Col>       
          <Col xs={8} sm={4}>
            <ScrollBtn name={content.steps.heading} target='lay_steps' offset={-250}/>
          </Col>       
        </Row>
      </div>

      <DividerTitle title={content.header.heading} />
      <Row gutter={[32, 12]} id='lay_header'>
        <Col xs={24} sm={12}>
          <h3>{content.header.items[0].title}</h3>
          <div css={Styles.box}>
            <div css={Styles.header.top}><div className='logo'>logo</div></div>
            <div className='content'><Skeleton/></div>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <h3>{content.header.items[1].title}</h3>
          <div css={Styles.box}>
            <Row css={Styles.header.side}>
              <Col span={5}><div className='logo'>logo</div></Col>
              <Col span={19}><div className='contentSide'><Skeleton/></div></Col>
            </Row>
          </div>
        </Col>
      </Row>

      <DividerTitle title={content.banner.heading}/>
      <Row gutter={[32, 12]} id='lay_banner'>
        <Col xs={24} sm={8}>
          <h3>{content.banner.items[0].title}</h3>
          <div css={Styles.box}>
            <div css={Styles.header.top}><div className='logo'>logo</div></div>
            <div className='content'><div css={Styles.banner}>
              <p className='title'>Title</p>
              <span>Subtitle</span>
            </div></div>
          </div>
        </Col>
        <Col xs={24} sm={8}>
          <h3>{content.banner.items[1].title}</h3>
          <div css={Styles.box}>
            <div css={Styles.header.top}><div className='logo'>logo</div></div>
            <div className='content'>
              <Row css={Styles.banner}>
                <Col span={12} className='sqr'>img</Col>
                <Col span={12} className='title'>Title</Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={8}>
          <h3>{content.banner.items[2].title}</h3>
          <div css={Styles.box}>
            <div css={Styles.header.top}><div className='logo'>logo</div></div>
            <div className='content'>
              <Row css={Styles.banner}>
                <Col span={12} className='title'>Title</Col>
                <Col span={12} className='sqr'>
                  <div className='miniSqr'>Btn</div>
                  <div className='miniSqr'>Btn</div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      <DividerTitle title={content.rows.heading}/>
      <Row gutter={[32, 12]} id='lay_rows'>
        <Col xs={24} sm={12}>
          <h3>{content.rows.items[0].title}</h3>
          <div css={Styles.box}>
            <div css={Styles.header.top}><div className='logo'>logo</div></div>
            <div className='content'>
              <Row gutter={12} css={Styles.rows}>
                <Col span={8}><Card><Skeleton/></Card></Col>
                <Col span={8}><Card><Skeleton/></Card></Col>
                <Col span={8}><Card><Skeleton/></Card></Col>
              </Row>
            </div>
          </div>
        </Col>

        <Col xs={24} sm={12}>
          <h3>{content.rows.items[1].title}</h3>
          <div css={Styles.box}>
            <div css={Styles.header.top}><div className='logo'>logo</div></div>
            <div className='content'>
              <Row gutter={12} css={Styles.rows}>
                <Col span={6}><Card><Skeleton/></Card></Col>
                <Col span={6}><Card><Skeleton/></Card></Col>
                <Col span={6}><Card><Skeleton/></Card></Col>
                <Col span={6}><Card><Skeleton/></Card></Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      <WhatsappBtn />

      <DividerTitle title={content.card.heading}/>
      <Row gutter={[32, 12]} css={Styles.card} id='lay_card'>
        <Col xs={24} sm={8}>
          <h3>{content.card.items[0].title}</h3>
          <Card>
            <h4>title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <h3>{content.card.items[1].title}</h3>
          <Card>
            <h4>title</h4>
            <Skeleton.Image/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <h3>{content.card.items[2].title}</h3>
          <Card>
            <h5>Starter pack</h5>
            <h4>Rp 100K</h4>
            <li><CheckCircleOutlined/>Lorem ipsum dolor</li>
            <li><CheckCircleOutlined/>Lorem ipsum dolor</li>
            <li><CheckCircleOutlined/>Lorem ipsum dolor</li>
          </Card>
        </Col>
      </Row>

      <DividerTitle title={content.description.heading}/>
      <Row gutter={[32, 12]} id='lay_desc'>
        <Col xs={24} sm={12}>
          <h3>{content.description.items[0].title}</h3>
          <div css={Styles.box}>
            <div css={Styles.header.top}><div className='logo'>logo</div></div>
            <div className='content'>
              <Row gutter={12} css={Styles.desc}>
                <Col span={8}><CheckCircleOutlined/><h5>Title</h5><p>Lorem ipsum dolor sit amet, consectetur elit</p></Col>
                <Col span={8}><CheckCircleOutlined/><h5>Title</h5><p>Lorem ipsum dolor sit amet, consectetur elit</p></Col>
                <Col span={8}><CheckCircleOutlined/><h5>Title</h5><p>Lorem ipsum dolor sit amet, consectetur elit</p></Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <h3>{content.description.items[1].title}</h3>
          <div css={Styles.box}>
            <div css={Styles.header.top}><div className='logo'>logo</div></div>
            <div className='content'>
              <Row gutter={12} css={Styles.desc}>
                <Col span={12}>
                  <h5>Title</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </Col>
                <Col span={12}><Skeleton.Image/></Col>
                <Col span={12}><Skeleton.Image/></Col>
                <Col span={12}>
                  <h5>Title</h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      <DividerTitle title={content.steps.heading}/>
      <Row gutter={[32, 12]} id='lay_steps'>
        <Col xs={24} sm={12}>
          <h3>{content.steps.items[0].title}</h3>
          <div css={Styles.box}>
            <div css={Styles.header.top}><div className='logo'>logo</div></div>
            <div className='content' css={Styles.steps}>
              <Steps direction="vertical">
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
              </Steps>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <h3>{content.steps.items[1].title}</h3>
          <div css={Styles.box}>
            <div css={Styles.header.top}><div className='logo'>logo</div></div>
            <div className='content' css={Styles.steps}>
              <Steps>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
              </Steps>
            </div>
          </div>
        </Col>
      </Row>

      <WhatsappBtn />
    </div>
  </Layout>
)

export default LayoutPage