import React from 'react'
import { breakpoints } from '../styles/mediaQueries'
import { Divider } from 'antd'

export class DividerTitle extends React.Component {
  constructor() {
    super();
    
    this.state = {
      innerWidth: '',
      mqPX: []
    }
  }

  componentDidMount() {
    const fontSize = Number(window.getComputedStyle(document.body).getPropertyValue('font-size').match(/\d+/)[0]),
          mqPX = breakpoints.map( bp => bp * fontSize),
          innerWidth = window.innerWidth
    this.setState({ innerWidth, mqPX })
  }

  render () {
    const { title } = this.props, { innerWidth, mqPX } = this.state

    return (
      <React.Fragment>
      {
        (innerWidth > mqPX[2])
        ? <Divider style={{marginTop: '0'}}><h2>{title}</h2></Divider>
        : <React.Fragment>
        <h2>{title}</h2><Divider style={{marginTop: '0'}}/>
        </React.Fragment>
      }
    </React.Fragment>
    )
  }
}