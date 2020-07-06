import React from "react"
import img1 from '../images/descImg-1.jpg'
import img2 from '../images/descImg-2.jpg'

import { css } from '@emotion/core';
import { compUnits, mq, mqPX, styleFonts, styleSpacing } from '../styles';
import { Row, Col, Divider } from 'antd'


const Styles = css({

  '& h2, & h3': {
    textTransform: 'capitalize'
  },

  '& h5': {
    fontWeight: styleFonts.weightLight
  },

  '& img': {
    height: '100%',
    width: '100%',
    objectFit: compUnits.imageFit
  },

  [mq[2]]: {
    '& .ant-col':{
      height: '40rem',

      '& h5': {
        maxWidth: '60%',
        margin: '0 auto'
      }
    },

    '& .text': {
      '& h3': {
        marginTop: styleSpacing.spacingBig
      }
    }
  }
})

const secondRow = () => {
  if(window.innerWidth > mqPX[1]) {
    return (
      <React.Fragment>
        {/* LEFT IMG*/}
        <Col xs={24} sm={12}>
          <img src={img2}/>
        </Col>

        {/* RIGHT DESC */}
        <Col xs={24} sm={12} className='text'>
          <h3>Subtitle</h3>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h5>
        </Col>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      {/* DESC*/}
      <Col xs={24} sm={12} className='text'>
        <h3>Subtitle</h3>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h5>
      </Col>

      {/* IMG */}
      <Col xs={24} sm={12}>
        <img src={img2}/>
      </Col>
    </React.Fragment>
  )
}

const DescImg = () => {
  return (
    <div css={Styles}>
      <h2>Dibuat dengan bahan terbaik</h2>
      <Divider/>

      {/* FIRST ROW, IMG RIGHT */}
      <Row gutter={[12, 24]}>

        {/* LEFT DESC*/}
        <Col xs={24} sm={12} className='text'>
          <h3>Subtitle</h3>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h5>
        </Col>

        {/* RIGHT IMG */}
        <Col xs={24} sm={12}>
          <img src={img1}/>
        </Col>

      </Row>

      {/* SECOND ROW, IMG LEFT */}
      <Row gutter={[12, 24]}>
        {secondRow()}
      </Row>
    </div>
  )
}

export default DescImg