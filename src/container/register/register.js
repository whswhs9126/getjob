import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { register } from '../../redux/user.redux'
import Logo from '../../component/Logo'

const RadioItem = Radio.RadioItem

@connect(
  state=>state.user,
  { register }
)
class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: "",
      type: "genius",
      pwd: "",
      repeatpwd:""
    }
  }

  changeHandler(key, v) {
    this.setState({
      [key]: v
    })
  }

  registerHandler() {
    var data = this.state
    this.props.register(data)
  }

  componentDidMount() {
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
            <InputItem type="password" onChange={v=>this.changeHandler('pwd', v)}>密码</InputItem>
            <InputItem type="password" onChange={v=>this.changeHandler('repeatpwd', v)}>确认密码</InputItem>
            <RadioItem 
              checked={this.state.type==="genius"}
              onChange={v=>this.changeHandler('type', "genius")}
            >牛人</RadioItem>
            <RadioItem 
              checked={this.state.type==="boss"}
              onChange={v=>this.changeHandler('type', "boss")}
            >BOSS</RadioItem>
          </List>
          <WhiteSpace />
          <Button type="primary" onClick={this.registerHandler.bind(this)}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register