import React from "react"
import { css, jsx } from '@emotion/core';

import { compUnits, styleFonts } from '../styles';
import { Row, Col, Divider } from 'antd'

const Styles = css({

  '& h2, & h3': {
    textTransform: 'capitalize'
  },

  '& h5': {
    fontWeight: styleFonts.weightLight
  }
})

const Desc2 = () => {
  return (
    <div css={Styles}>
      <Divider><h2>Misi kami</h2></Divider>
      <Row gutter={[{xs: 12, md: 24}, 24]}>

      {/* FIRST / LEFT DESC*/}
        <Col xs={24} sm={12}>
          <h3>Subtitle</h3>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h5>
        </Col>

      {/* SECOND / RIGHT DESC */}
        <Col xs={24} sm={12}>
          <h3>Subtitle</h3>
          <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h5>
        </Col>

      </Row>
    </div>
  )
}

export default Desc2