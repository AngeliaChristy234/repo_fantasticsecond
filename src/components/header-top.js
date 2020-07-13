import React from "react"
import { Link } from 'gatsby'
import PropTypes from "prop-types"

import { css } from '@emotion/core';
import logo from '../images/logo.jpg'

import { boxShadows, styleColors, styleSpacing  } from '../styles/abstract'
import { breakpoints, mq } from '../styles/mediaQueries'
import { compUnits, hoverScale } from '../styles/utils'

import { Button, Drawer, Menu } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

const Styles = css({
  position: compUnits.headerPosition,
  top: '0',
  left: '0',
  zIndex: '99',
  height: compUnits.headerHeight,
  width: '100vw',
  padding: styleSpacing.spacingMini,
  overflow: 'hidden',
  backgroundColor: styleColors.white,
  boxShadow: boxShadows.point5,

  '& img': {
    maxHeight: '100%',
    maxWidth: '60%',
    padding: styleSpacing.spacingMini,
    marginRight: styleSpacing.spacingSmall,
    cursor: 'pointer',
    ...hoverScale
  },

  '& button': {
    float: 'right',
    height: '100%',
    backgroundColor: styleColors.primary,
    borderColor: styleColors.primary
  },

  '& a': {
    margin: `0 ${styleSpacing.spacingSmall}`,
    color: styleColors.black,

    '&:hover': {
      color: styleColors.primary,
      textShadow: boxShadows.point5
    }
  },  
    
  [mq[0]]: {   
    '& img': {
      width: 'auto',
      height: '100%'
    }
  },

  [mq[2]]: { 
    padding: `0 ${styleSpacing.spacingSmall}`,

    '& a': {
      transform: 'translateY(3px)'
    }
  }
})

class HeaderTop extends React.Component {
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)

    this.state = {
      mqPX: [],
      width: 0, height: 0,
      visible: false, placement: 'top'
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    const fontSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]),
          mqPX     = breakpoints.map( bp => bp * fontSize)
    this.setState({mqPX})
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  }

  render() {
    const { mqPX, width, placement, visible } = this.state

    if(width > mqPX[2]) {
      return (
        <header css={Styles}>  
          <img src={logo} onClick={() => window.location.href = '/'} alt='fantastic second'/>
          <Link href='/'>Home</Link>
          <Link href='/layout'>Layout</Link>
          <Link href='/layanan'>Layanan</Link>
          <Link href='/portfolio'>Portfolio</Link>
          <Link href='/hubungikami'>Hubungi kami</Link>
        </header>
      )
    }

    return (
      <header css={Styles}>
        <Drawer
          title="Menu"
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}
        >
          <Menu>
            <Menu.Item><Link href='/'>Home</Link></Menu.Item>
            <Menu.Item><Link href='/layout'>Layout</Link></Menu.Item>
            <Menu.Item><Link href='/layanan'>Layanan</Link></Menu.Item>
            <Menu.Item><Link href='/portfolio'>Portfolio</Link></Menu.Item>
            <Menu.Item><Link href='/hubungikami'>Hubungi kami</Link></Menu.Item>
          </Menu>
        </Drawer>

        <img src={logo} onClick={() => window.location.href = '/'} alt='fantastic second'/>
        <Button type="primary" onClick={this.showDrawer}>
          <MenuOutlined />
        </Button>
      </header>
    )

  }
}

HeaderTop.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderTop.defaultProps = {
  siteTitle: ``,
}

export default HeaderTop
