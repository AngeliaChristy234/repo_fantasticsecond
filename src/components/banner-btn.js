import React from "react"
import bannerImg from '../images/banner.jpg'
import { absCenter, boxShadows, compUnits, hoverTrans, styleColors, styleFonts, styleSpacing, mq } from '../styles'

import { css, jsx } from '@emotion/core';
import { Row, Col, Card, Button } from 'antd'
import { InstagramOutlined, PhoneOutlined, PushpinOutlined } from '@ant-design/icons'

const Styles = css({
  position: 'relative',
  height: 'auto',
  width: '100%',
  textAlign: 'center',
  overflow: 'hidden',
  background: styleColors.black,
  boxShadow: boxShadows.point5,

  '& .imgBanner': {
    position: 'absolute',
    height: '100%',
    minWidth: '100%',
    transform: 'translateX(-50%)',
    objectFit: 'cover',
    opacity: compUnits.bannerOpacity
  },

  '& .ant-row': {
    padding: styleSpacing.spacingSmall,
    height: '100%',

    '& h1': {
      padding: styleSpacing.spacingMedium
    },  

    '& .ant-card': {
      margin: `${styleSpacing.spacingMedium} 0`,
      boxShadow: boxShadows.point8,
      border: `1px solid ${styleColors.grayLight}`,
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
  
      '& button': {
        display: 'block',
        width: '100%',
        height: '12rem',
        margin: `${styleSpacing.spacingSmall} auto`,
        fontSize: styleFonts.sizeMedium,
        backgroundColor: styleColors.primary,
        color: styleColors.white,

        '&:hover': {
          ...hoverTrans
        }
      }
    },

    '& h1': {
      marginTop: styleSpacing.spacingMedium,
      backgroundColor: styleColors.grayLight,
      color: styleColors.white,
      fontWeight: styleFonts.weightBold,
      textShadow: boxShadows.point8
    }
  },

  [mq[1]]: {
    '& .ant-row': {
      padding: styleSpacing.spacingBig,

      '& h1': {
        ...absCenter,
        maxWidth: '80%',
        backgroundColor: 'transparent',
        fontSize: styleFonts.sizeBig
      }
    }
  },

  [mq[2]]: {
    '& .ant-row .ant-card button': {
      height: '8rem',
      fontSize: styleFonts.sizeSmall,

      '& svg': {
        marginRight: styleSpacing.spacingMini,
        width: styleFonts.sizeMedium,
        height: 'auto',
        transform: 'translateY(4px)'
      }
    }
  }
})

const BannerButton = () => {
  return (
    <div css={Styles} id='banner_btn'>
      <img src={bannerImg} className='imgBanner'/>
      <Row gutter={32}>
        <Col xs={24} sm={12}><h1>Coklat Premium untuk Semua</h1></Col>
        <Col xs={24} sm={12}>
          <Card title='Sosial media kami'>
            <Button icon={<InstagramOutlined/>}>@dindaspastry</Button>
            <Button icon={<PhoneOutlined/>}>+62 819617618</Button>
            <Button icon={<PushpinOutlined/>}>Bisma 6 blok b15 no 18</Button>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default BannerButton;