import axios from 'axios'

import { getRedirectPath } from '../util.js'

//常量
const REGISTER_SUCESS = 'REGISTER_SUCESS'
const ERROR_MSG ='ERROR_MSG'
const LOGIN_SUCESS = 'LOGIN_SUCESS'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
        redirectTo: '',
        isAuth: false,
        msg: '',
        user: '',
        type: ''
      }

//reducer
export function user(state=initState, action) {
  switch(action.type) {
    case REGISTER_SUCESS:
      return {...state, msg: '', isAuth: true, redirectTo: getRedirectPath(action.payload), ...action.payload}
    case LOGIN_SUCESS:
      return {...state, msg: '', isAuth: true, redirectTo: getRedirectPath(action.payload), ...action.payload}
    case LOAD_DATA: 
      return {...state, ...action.payload}
    case ERROR_MSG: 
      return {...state, msg: action.msg, isAuth: false}
    default:
      return state
  }
}

function errorMsg(msg) {
  return {msg, type: ERROR_MSG}
}

function registerSucess(data) {
  return {type: REGISTER_SUCESS, payload: data}
}

function loginSucess(data) {
  return {type: LOGIN_SUCESS, payload: data}
}

export function loadData(userinfo) {
  return {type: LOAD_DATA, payload: userinfo}
}

export function login({user, pwd}) {
  if(!user||!pwd) {
    return errorMsg('请填写用户名和密码')
  }
  return dispatch=>{
    axios.post('/user/login', {user, pwd})
    .then(res=>{
      if(res.status===200&&res.data.code===0){
        dispatch(loginSucess(res.data.data))
      }else {
        dispatch(errorMsg(res.data.msg)) 
      }
    })
  }
}

export function register({user, pwd, repeatpwd, type}) {
  if(!user||!pwd||!type) {
    return errorMsg('信息不完整')
  }
  if(pwd !== repeatpwd) {
    return errorMsg('两次密码输出不同')
  }
  return dispatch=>{
    axios.post('/user/register', {user, pwd, type})
    .then(res=>{
      if(res.status===200&&res.data.code===0){
        dispatch(registerSucess({user, pwd, type}))
      }else {
        dispatch(errorMsg(res.data.err)) 
      }
    })
  }
  
}









