const express = require('express')
const userRouter = require('./user')

const app = express()

app.get('/', function(req, res){
  res.send("hello!!!!!!!")
})

app.use('/user', userRouter)

app.listen(8001, function(){
  console.log("node app started at port 8001")
})
