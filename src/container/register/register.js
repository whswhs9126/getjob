import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'

import Logo from '../../component/Logo'

const RadioItem = Radio.RadioItem

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: "genius"
    }
  }
  render() {
    return (
      <div>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem>用户</InputItem>
            <WhiteSpace />
            <InputItem>密码</InputItem>
            <InputItem>确认密码</InputItem>
            <RadioItem checked={this.state.type==="genius"}>牛人</RadioItem>
            <RadioItem checked={this.state.type==="boss"}>BOSS</RadioItem>
          </List>
          <WhiteSpace />
          <Button type="primary">注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register