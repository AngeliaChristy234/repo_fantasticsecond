import React from "react"
import { css } from '@emotion/core';
import { DividerTitle } from './divider'

import { styleColors, styleSpacing } from '../styles/abstract'
import { mq } from '../styles/mediaQueries'
import { compUnits } from '../styles/utils'

import { Row, Col, Card } from 'antd'
const { Meta } = Card

const Styles = css({
  
  '& .ant-card': {
    border: `1px solid ${styleColors.grayLight}`,

    '& img': {
      marginBottom: styleSpacing.spacingMini,
      height: '30vh',
      width: '100%',
      objectFit: compUnits.imageFit
    }
  },

  [mq[1]]: {
    '& .ant-card': {
      height: '55rem',

    }
  },

  [mq[2]]: {
    '& .ant-card': {
      height: '45rem'
    }
  }
})

const Card3 = ({ content }) => {
  return (
    <div css={Styles} id='card3'>
      <DividerTitle title={content.heading}/>
      <Row gutter={[12, 12]}>
      {
        content.items.map(e => (
          <Col xs={24} sm={8}>
            <Card hoverable>
            <img src={e.img} alt={e.title}/>
              <Meta
                title={e.title}
                description={e.desc}
              />
            </Card>
          </Col>
        ))
      }
      </Row>
    </div>
  )
}

export default Card3