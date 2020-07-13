/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { DividerTitle } from './divider'

import { styleColors, styleFonts, styleSpacing } from '../styles/abstract'
import { hoverTrans } from '../styles/utils'
import { Row, Col } from 'antd'

const Styles = css({
  '& h2, & h3': {
    textTransform: 'capitalize'
  },

  '& .box': {
    padding: styleSpacing.spacingSmall,
    border: `1px solid ${styleColors.grayLight}`,
    cursor: 'pointer',

    ...hoverTrans,

    '& img': {
      marginBottom: styleSpacing.spacingSmall,
      height: '20rem',
      objectFit: 'contain'
    }
  },

  '& h5': {
    fontWeight: styleFonts.weightLight
  }
})

const Desc2 = ({ content }) => {
  return (
    <div css={Styles} id='desc2'>
      <DividerTitle title={ content.heading }/>
      <Row gutter={[{xs: 12, md: 24}, 24]}>
        {
          content.items.map(e => (
            <Col xs={24} sm={12} onClick={() => window.location.href = e.link }>
              <div className='box'>
                <h3>{e.title}</h3>
                {
                  (e.img)
                  ? <img src={e.img} alt='jasa web desain'/>
                  : null
                }
                <h5>{e.desc}</h5>
              </div>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Desc2