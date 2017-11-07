import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { login } from '../../redux/user.redux'
import Logo from '../../component/Logo'

@connect(
  state=>state.user,
  { login }
)
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
  }

  changeHandler(key, v) {
    this.setState({
      [key]: v
    })
  }

  loginHandler() {
    var data = this.state
    console.log(data)
    this.props.login(data)
  }

  render() {
    return (
      <div>

        {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
        <Logo></Logo>
        <WingBlank>
          <List>
            <p className='error-msg'>{this.props.msg?this.props.msg:' '}</p>
            <InputItem onChange={v=>this.changeHandler('user', v)}>用户</InputItem>
            <WhiteSpace />
            <InputItem type="password" onChange={v=>this.changeHandler('pwd', v)}>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={this.loginHandler.bind(this)}>登录</Button>
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