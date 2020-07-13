/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { DividerTitle } from './divider'
import { OrderBtn } from './buttons'

import { styleColors, styleFonts, styleSpacing } from '../styles/abstract'
import { mq } from '../styles/mediaQueries'

import { CheckCircleOutlined } from '@ant-design/icons'
import { Row, Col, Card } from 'antd'

const Styles = css({
  '& .ant-card': {
    border: `1px solid ${styleColors.grayLight}`,

    '& h3': {
      textTransform: 'capitalize'
    },

    '& .price': {
      fontSize: styleFonts.sizeHuge
    },

    '& .unit': {
      color: styleColors.grayMed,
      fontWeight: styleFonts.weightLight,
    },

    '& ul': {
      margin: '0',
      padding: '0',
      textAlign: 'left',

      '& li': {
        listStyle: 'none',

        '& svg': {
          marginRight: styleSpacing.spacingSmall,
          color: styleColors.green
        }
      }
    },

    '& p': {
      marginTop: styleSpacing.spacingMedium,
      textAlign: 'left'
    }
  },

  '& button': {
    width: '100%'
  },

  [mq[1]]: {
    '& .ant-card': {
      '& .price': {
        fontSize: styleFonts.sizeBig
      }
    }
  },

  [mq[2]]: {
    '& .ant-card': {
      height: '45rem',

      '& .price': {
        fontSize: styleFonts.sizeBig
      },

      '& .unit': {
        fontSize: styleFonts.sizeSmall
      },

      '& p': {
        position: 'absolute',
        bottom: '0'
      }
    }
  }
})

const Card3_Price = ({ content }) => {
  return (
    <div css={Styles} id='card3'>
      <DividerTitle title={content.heading}/>
      <Row gutter={[12, 12]}>
        {
          content.items.map(e => (
            <Col xs={24} sm={8}>
              <Card hoverable>
                <h3>{ e.title }</h3>
                <h4>
                  <span className='price'>Rp { e.price }</span>
                  <span className='unit'> / page</span>
                </h4>
                <ul>
                  {
                    e.desc.map( text => (
                      <li><CheckCircleOutlined/>{ text }</li>
                    ))
                  }
                </ul>
                <p>{e.desc_2}</p>
              </Card>
              <OrderBtn />
            </Col>
          ))
        } 
      </Row>
    </div>
  )
}

export default Card3_Price