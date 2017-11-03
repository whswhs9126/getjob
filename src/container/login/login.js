import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'

import Logo from '../../component/Logo'

class Login extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem>用户</InputItem>
            <WhiteSpace />
            <InputItem>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary">登录</Button>
          <WhiteSpace />
          <Button type="primary" onClick={this.registerClick.bind(this)}>注册</Button>
        </WingBlank>
      </div>
    )
  }
  registerClick() {
    this.props.history.push('/register')
  }
}

export default Login