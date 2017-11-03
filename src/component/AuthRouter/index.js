import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

@withRouter
class AuthRouter extends React.Component {
  componentDidMount() {
    const pathList = ["login", "register"]
    const pathname = this.props.location.pathname
    if(pathList.indexOf(pathname) > -1){
      return null
    }
    
    axios.get('/user/info')
    .then(res=>{
      if(res.status===200){
        if(res.data===0){

        }else{
          this.props.history.push('/login')
        }
      }
    })
  }

  render() {
    return (
      <div>router test</div>
    )
  }
}

export default AuthRouter