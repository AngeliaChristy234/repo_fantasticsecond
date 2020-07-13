import { useEffect } from "react";
import PropTypes from "prop-types"
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { styleFonts } from '../styles/abstract'
import { mq } from '../styles/mediaQueries'
import { compUnits, hoverScale } from '../styles/utils'

// COMPONENTS
import HeaderTop from "./header-top"
import Footer from './footer'

const Styles = ({
  body: css({
    textAlign: 'center',

    [mq[2]]: {
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

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  
  return (
    <div>
    {/* FIXED HEADER TOP */}
      <div style={{height: compUnits.headerHeight}} />
      <HeaderTop />

    {/* BODY / CONTENT */}
      <main>
        <div css={Styles.body}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
