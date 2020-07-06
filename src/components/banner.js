import React from "react"
import { css, jsx } from '@emotion/core';
import bannerImg from '../images/banner.jpg';
import { absCenter, boxShadows, compUnits, mq, styleColors, styleFonts } from '../styles';

const Styles = css({
  position: 'relative',
  height: compUnits.bannerDefault,
  width: '100%',
  textAlign: 'center',
  overflow: 'hidden',
  boxShadow: boxShadows.point5,

  '& img': {
    position: 'absolute',
    height: '100%',
    minWidth: '100%',
    transform: 'translateX(-50%)',
    objectFit: 'cover'
  },

  '& h1': {
    ...absCenter,
    width: '80vw',
    color: styleColors.white,
    fontWeight: styleFonts.weightBold,
    textShadow: boxShadows.point8,

    [mq[2]]: {
      fontSize: styleFonts.sizeHuge
    }
  }
})

const Banner = () => {
  return (
    <div css={Styles}>
      <img src={bannerImg}/>
      <h1>Coklat Premium untuk Semua</h1>
    </div>
  )
}

export default Banner;