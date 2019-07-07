import React, { Component } from 'react'
import './styles.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div>React Media Player</div>
        <div className="links"></div>
      </nav>
    )
  }
}
