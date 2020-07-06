import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from '../images/logo.jpg'
import { boxShadows, compUnits, hoverScale, mq, mqPX, styleColors, styleSpacing} from '../styles';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
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
    padding: `0 ${styleSpacing.spacingSmall}`
  }
})

class HeaderTop extends React.Component {
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)

    this.state = {
      width: 0, height: 0,
      visible: false, placement: 'top'
    };
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
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
    const { width, placement, visible } = this.state

    if(width > mqPX[2]) {
      return (
        <header css={Styles}>  
          <img src={logo}/>
          <Link>Home</Link>
          <Link>Showcase</Link>
          <Link>Hubungi kami</Link>
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
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Showcase</Menu.Item>
            <Menu.Item>Hubungi kami</Menu.Item>
          </Menu>
        </Drawer>

        <img src={logo}/>
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
