import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import reducers from './reducers'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRouter from './component/AuthRouter'
import './config'
import './index.css'


const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():()=>{}
))

function Boss() {
  return <h2>Boss</h2>
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRouter></AuthRouter>
        <Route path='/boss' component={Boss}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)




