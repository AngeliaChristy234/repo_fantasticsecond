import React from "react"
import { Link } from "gatsby"
import { absContent } from '../content/abs.content'
import { css } from '@emotion/core';
import logo from '../images/logo.jpg'

import { styleColors, styleSpacing  } from '../styles/abstract'
import { mq } from '../styles/mediaQueries'
import { compUnits } from '../styles/utils'

import { MailOutlined, InstagramOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons'

const Styles = css({
  padding: styleSpacing.spacingSmall,
  marginTop: styleSpacing.spacingHuge,
  backgroundColor: styleColors.primary,
  textAlign: 'center',

  '& > *': {
    display: 'block'
  },

  '& img': {
    maxWidth: '80%',
    maxHeight: 'auto',
    margin: `${styleSpacing.spacingMedium} auto`
  },

  '& a': {
    margin: `${styleSpacing.spacingSmall} 0`,
    textAlign: 'left',
    color: styleColors.white,

    '& svg': {
      marginRight: styleSpacing.spacingSmall
    }
  },

  [mq[2]]: {
    padding: `${styleSpacing.spacingMedium} ${styleSpacing.spacingBig} `,

    '& a': {
      margin: `${styleSpacing.spacingMini} 0`,
      textAlign: 'right'
    },

    '& img': {
      float: 'left',
      maxWidth: 'none',
      height: compUnits.headerHeight
    }
  }
})

const Footer = () => {
  return (
    <footer css={Styles}>
      <img src={logo} alt='fantastic second'/>
      <Link href={`mailto:${absContent.email}`} target='blank'>
        <MailOutlined/> {absContent.email}
      </Link>
      <Link href= {`https://instagram.com/${absContent.instagram}`} target='blank'>
        <InstagramOutlined/> @ {absContent.instagram}
      </Link>
      <Link href= {`tel:${absContent.phone}`} target='blank'><PhoneOutlined/> {absContent.whataspp}</Link>
      <Link href= {absContent.whatsappLink} target='blank'><WhatsAppOutlined/> {absContent.whataspp}</Link>
    </footer>
  )
}

export default Footer