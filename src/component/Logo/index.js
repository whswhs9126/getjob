import React from 'react'

import logoImg from '../../static/img/job.png'
import './index.css'

class Logo extends React.Component {
  render() {
    return (
      <div className="logo-container">
        <img src={logoImg} alt=""/>
      </div>
    )
  }
}

export default Logo