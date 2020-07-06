import React from "react"
import logo from '../images/logo.jpg'
import { Link } from "gatsby"

import { css, jsx } from '@emotion/core';
import { compUnits, mq, styleColors, styleSpacing } from '../styles';
import { InstagramOutlined, PhoneOutlined, PushpinOutlined } from '@ant-design/icons'

const Styles = css({
  padding: styleSpacing.spacingSmall,
  marginTop: styleSpacing.spacingHuge,
  backgroundColor: styleColors.primary,
  textAlign: 'center',

  '& > *': {
    display: 'block'
  },

  '& img': {
    height: compUnits.headerHeight,
    margin: '0 auto',
    marginBottom: styleSpacing.spacingSmall,
  },

  '& a': {
    color: styleColors.white,

    '& svg': {
      marginRight: styleSpacing.spacingSmall
    }
  }
})

const Footer = () => {
  return (
    <footer css={Styles}>
      <img src={logo}/>
      <Link><InstagramOutlined/> @thegoodbakery</Link>
      <Link><PhoneOutlined/> +62 0819617618</Link>
      <Link><PushpinOutlined /> Bisma 6 blok J18 no 12</Link>
    </footer>
  )
}

export default Footer