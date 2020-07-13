/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import bannerImg from '../images/banner.jpg';

import { boxShadows, styleColors, styleFonts } from '../styles/abstract'
import { absCenter, compUnits } from '../styles/utils'
import { mq } from '../styles/mediaQueries'

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

  '& .center': {
    ...absCenter,

    '& h1, & h3': {
      width: '80vw',
      color: styleColors.white,
    },

    '& h1': {
      textTransform: 'capitalize',
      fontWeight: styleFonts.weightBold,
      textShadow: boxShadows.point8,
  
      [mq[2]]: {
        fontSize: styleFonts.sizeHuge
      }
    },

    '& h3': {
      fontFamily: styleFonts.secondary,
  
      [mq[2]]: {
        fontSize: styleFonts.sizeSmall
      }
    }
  }
})

const Banner = ({ content }) => {
  return (
    <div css={Styles} id='banner'>
      <img src={bannerImg} alt={content.heading}/>
      <div className='center'>
        <h1>{ content.heading }</h1>
        <h3>{ content.desc }</h3>
      </div>
    </div>
  )
}

export default Banner;