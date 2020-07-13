import React from "react"
import { css } from '@emotion/core'
import { DividerTitle } from './divider'

import { styleColors, styleSpacing  } from '../styles/abstract'
import { mq } from '../styles/mediaQueries'

import { Steps } from 'antd';
const { Step } = Steps;

const Styles = css({
  '& .ant-steps-item-icon': {
    backgroundColor: styleColors.primary,
    borderColor: styleColors.secondary,

    '& .ant-steps-icon': {
      color: styleColors.white
    }
  },

  '& .ant-steps-item-content': {
    '& .ant-steps-item-title': {
      color: `${styleColors.black} !important`
    },

    '& .ant-steps-item-description': {
      color: `${styleColors.grayMed} !important`
    }
  },

  [mq[2]]: {
    overflow: 'hidden',

    '& .ant-steps': {
      height: '30rem',
      marginTop: styleSpacing.spacingBig,

      '& > *': {
        transformOrigin: 'left top',
        transform: 'scale(1.3)'
      }
    },

    '& button': {
      float: 'left',
      marginTop: styleSpacing.spacingMedium
    }

  }
})

const StepsVertical = ({ content }) => {
  return (
    <div id='steps_v' css={Styles}>
      <DividerTitle title={content.heading}/>
      <Steps direction="vertical">
        {
          content.items.map(e => (
            (e.link)
            ? <Step title={e.title} description={e.desc} onClick={() => window.location.href = e.link} style={{cursor: 'pointer'}}/>
            : <Step title={e.title} description={e.desc} />
          ))
        }
      </Steps>
    </div>
  )
}

export default StepsVertical