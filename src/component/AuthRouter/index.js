import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadData } from '../../redux/user.redux'

@withRouter
@connect(
  null,
  { loadData } 
)
class AuthRouter extends React.Component {
  componentDidMount() {
    const pathList = ["/login", "/register"]
    const pathname = this.props.location.pathname
  
    if(pathList.indexOf(pathname) > -1){
      return 
    }

    axios.get('/user/info')
    .then(res=>{
      console.log(res)
      if(res.status===200){
        if(res.data.code===0){
          this.props.loadData(res.data.data)
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