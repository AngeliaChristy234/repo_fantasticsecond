import React from "react"

import { mq, styleColors, styleSpacing } from '../styles';
import { css } from '@emotion/core';
import { Steps, Divider } from 'antd';
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
    transform: 'scale(1.5) translateX(15%)',
    marginTop: styleSpacing.spacingBig,
    maxWidth: '50rem'
  }
})

const StepsVertical = () => {
  return (
    <div>
      <Divider><h2>Langkah order</h2></Divider>
      <Steps direction="vertical" css={Styles}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
    </div>
  )
}

export default StepsVertical