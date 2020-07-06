import React from "react"
import { css, jsx } from '@emotion/core';

import img1 from '../images/card3-1.jpg';
import img2 from '../images/card3-2.jpg';
import img3 from '../images/card3-3.jpg';

import { compUnits, mq, styleColors } from '../styles';
import { Row, Col, Divider, Card } from 'antd'
const { Meta } = Card;

const Styles = css({
  
  '& .ant-card': {
    border: `1px solid ${styleColors.grayLight}`,

    '& img': {
      height: '30vh',
      width: '100%',
      objectFit: compUnits.imageFit
    }
  },

  [mq[1]]: {
    '& .ant-card': {
      height: '55rem',

      '& img': {
        height: '30rem'
      }
    }
  },

  [mq[2]]: {
    '& .ant-card': {
      height: '45rem'
    }
  }

})

const Card3 = () => {
  return (
    <div css={Styles}>
      <Divider><h2>Koleksi kita</h2></Divider>
      <Row gutter={[12, 12]}>

      {/* FIRST CARD */}
        <Col xs={24} sm={8}>
          <Card
            hoverable
            cover={<img src={img1}/>}
          >
            <Meta title="Dark chocolate cake" description="Dark chocolate 80%" />
          </Card>
        </Col>

      {/* SECOND CARD */}
        <Col xs={24} sm={8}>
          <Card
            hoverable
            cover={<img src={img2}/>}
          >
            <Meta title="Tiramisu goodness" description="Handmade tiramisu flavour" />
          </Card>
        </Col>

      {/* THIRD CARD */}
        <Col xs={24} sm={8}>
          <Card
            hoverable
            cover={<img src={img3}/>}
          >
            <Meta title="Classic chocolate" description="Favoritnya pesta ulang tahun!" />
          </Card>
        </Col>

        
      </Row>
    </div>
  )
}

export default Card3