const express = require('express')
const userRouter = require('./user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())
app.use(bodyParser.json())

app.get('/', function(req, res){
  res.send("hello!!!!!!!")
})

app.use('/user', userRouter)

app.listen(8001, function(){
  console.log("node app started at port 8001")
})
