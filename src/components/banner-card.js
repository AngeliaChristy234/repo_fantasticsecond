import React from "react"
import bannerImg from '../images/banner.jpg'
import bannerCard from '../images/banner-card.jpg'
import { absCenter, boxShadows, compUnits, styleColors, styleFonts, styleSpacing, mq } from '../styles'

import { css, jsx } from '@emotion/core';
import { Row, Col, Card } from 'antd'
const { Meta } = Card;

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

    '& .ant-card': {
      height: '100%',
      boxShadow: boxShadows.point8,
      border: `1px solid ${styleColors.grayLight}`,
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
  
      '& img': {
        maxHeight: '40vh',
        objectFit: compUnits.imageFit
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
  }
})

const BannerCard = () => {
  return (
    <div css={Styles} id='banner_card'>
      <img src={bannerImg} className='imgBanner'/>
      <Row gutter={32}>
        <Col xs={24} sm={12}>
          <Card cover={<img src={bannerCard} />}>
            <Meta title="Coklat Premium Organik" />
          </Card>
        </Col>
        <Col xs={24} sm={12}><h1>Coklat Premium untuk Semua</h1></Col>
      </Row>
    </div>
  )
}

export default BannerCard;