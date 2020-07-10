import React from "react"
import { css, jsx } from '@emotion/core';

import { compUnits, styleFonts } from '../styles';
import { Row, Col, Divider } from 'antd'
import { WalletFilled, ClockCircleFilled, SafetyCertificateFilled } from '@ant-design/icons'

const Styles = css({

  '& svg': {
    height: compUnits.iconDefault,
    width: 'auto'
  },

  '& h2, & h3': {
    textTransform: 'capitalize'
  },

  '& h5': {
    fontWeight: styleFonts.weightLight
  }
})

const Desc3 = () => {
  return (
    <div css={Styles} id='desc3'>
    <Divider><h2>Misi kami</h2></Divider>
    <Row gutter={[{xs: 12, md: 72}, 24]}>

    {/* FIRST / LEFT DESC*/}
      <Col xs={24} sm={8}>
        <WalletFilled cla/>
        <h3>Subtitle</h3>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h5>
      </Col>

    {/* SECOND / MIDDLE DESC */}
      <Col xs={24} sm={8}>
        <ClockCircleFilled />
        <h3>Subtitle</h3>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h5>
      </Col>

    {/* THIRD / RIGHT DESC */}
      <Col xs={24} sm={8}>
        <SafetyCertificateFilled />
        <h3>Subtitle</h3>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h5>
      </Col>

    </Row>
    </div>
  )
}

export default Desc3