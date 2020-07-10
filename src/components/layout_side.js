import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// COMPONENTS
import HeaderSide from "./header-side"
import Banner from './banner'
import BannerCard from './banner-card'
import BannerButton from './banner-btn'
import Card3 from './card-3'
import Card4 from './card-4'
import Desc2 from './description-2'
import Desc3 from './description-3'
import DescImg from './description-img'
import StepsVertical from './steps-V'
import Footer from './footer'

import { compUnits, hoverScale, mq, styleFonts, styleSpacing } from '../styles'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Styles = ({
  body: css({
    padding: `0 ${styleSpacing.spacingSmall}`,
    textAlign: 'center',

    '& > *': {
      marginTop: styleSpacing.spacingHuge
    },

    [mq[2]]: {
      padding: `0 ${styleSpacing.spacingHuge}`,

      '& h2': hoverScale,

      '& h3': {
        fontSize: styleFonts.sizeMedium
      },

      '& h5':{
        fontSize: styleFonts.sizeDefault
      }
    }
  }),

  bodySidebar: css({
    [mq[2]]: {
      marginLeft: compUnits.headerWidth
    }
  })
})

const LayoutSide = ({ children }) => {
  return (
    <>
      <div>
      {/* FIXED HEADER SIDE */}
        <HeaderSide/>
      {/* BODY / CONTENT */}
        <main css={Styles.bodySidebar}>
          <Banner/>
          <div css={Styles.body}>
            <Card3 />
            <Desc2 />
            <Desc3 />
            <StepsVertical />
            {children}
          </div>

          <BannerCard />
          <div css={Styles.body}>
            <DescImg />  
            <Card4 />
          </div>

          <BannerButton />
            
          <Footer />
        </main>

      </div>
    </>
  )
}

LayoutSide.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutSide
