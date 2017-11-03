const mongoose = require('mongoose')

const DB_URL = "mongodb://localhost:27017/getjob"

mongoose.connect(DB_URL)
mongoose.connection.on("connected", function(){
  console.log("mongo connect success!!!")
})

const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
}))

// User.create({
//   user: "wuhongsu",
//   age: 25
// }, function(err, doc){
//   if(!err){
//     console.log(doc)
//   }else {
//     console.log(err)
//   }
// })
// User.remove({_id: "59face499ea5f90ad2d4baa0"}, function(err, doc){
//   console.log(doc)
// })