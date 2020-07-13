import React from "react"
import { css } from '@emotion/core';
import { DividerTitle } from './divider'

import { styleFonts, styleSpacing  } from '../styles/abstract'
import { breakpoints, mq } from '../styles/mediaQueries'
import { compUnits } from '../styles/utils'

import { Row, Col } from 'antd'


const Styles = css({
  '& h2, & h3': {
    textTransform: 'capitalize'
  },

  '& h5': {
    fontSize: styleFonts.sizeMedium,
    fontWeight: styleFonts.weightLight
  },

  '& img': {
    height: '100%',
    width: '100%',
    objectFit: compUnits.imageFit
  },
  
  '& button': {
    marginTop: styleSpacing.spacingSmall
  },

  [mq[2]]: {
    '& .ant-col':{
      height: '40rem',

      '& h5': {
        maxWidth: '60%',
        margin: '0 auto',
        fontSize: styleFonts.sizeSmall
      }
    },

    '& .text': {
      '& h3': {
        marginTop: styleSpacing.spacingBig
      }
    },

    '& button': {
      marginTop: styleSpacing.spacingMedium
    }
  }
})

class DescImg extends React.Component {
  constructor() {
    super();
    
    this.state = {
      innerWidth: '',
      mqPX: []
    }
  }

  componentDidMount() {
    const fontSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]),
          mqPX = breakpoints.map( bp => bp * fontSize),
          innerWidth = window.innerWidth
    this.setState({ innerWidth, mqPX})
  }

  secondRow = (content) => {

    const { innerWidth, mqPX } = this.state

    if(innerWidth > mqPX[1]) {
      return (
        <React.Fragment>
          {/* LEFT IMG*/}
          <Col xs={24} sm={12}>
            <img src={content.img} alt={content.title}/>
          </Col>
  
          {/* RIGHT DESC */}
          <Col xs={24} sm={12} className='text'>
            <h3>{ content.title }</h3>
            <h5>{ content.desc }</h5>
            <h5>{ content.desc2_2 }</h5>
          </Col>
        </React.Fragment>
      )
    }
  
    return (
      <React.Fragment>
        {/* DESC*/}
        <Col xs={24} sm={12} className='text'>
          <h3>{ content.title }</h3>
          <h5>{ content.desc }</h5>
          <h5>{ content.desc2_2 }</h5>
        </Col>
  
        {/* IMG */}
        <Col xs={24} sm={12}>
          <img src={content.img} alt={content.title}/>
        </Col>
      </React.Fragment>
    )
  }

  render () {
    const { content } = this.props

    return (
      <div css={Styles} id='desc_img'>
        <DividerTitle title={content.heading} />

        {/* FIRST ROW, IMG RIGHT */}
        <Row gutter={[12, 24]}>

          {/* LEFT DESC*/}
          <Col xs={24} sm={12} className='text'>
            <h3>{ content.items[0].title }</h3>
            <h5>{ content.items[0].desc }</h5>
          </Col>

          {/* RIGHT IMG */}
          <Col xs={24} sm={12}>
            <img src={ content.items[0].img } alt={content.items[0].title}/>
          </Col>

        </Row>

        {/* SECOND ROW, IMG LEFT */}
        <Row gutter={[12, 24]}>
          {this.secondRow( content.items[1] )}
        </Row>
      </div>
    )
  }
}
export default DescImg