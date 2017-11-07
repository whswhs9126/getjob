const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/imooc-chat'

mongoose.connect(DB_URL)

const models = {
  user: {
    'user': {type: String, require: true},
    'pwd': {type: String, require: true},
    'type': {type: String, require: true},
    'avatar': {type: String},
    'desc': {type: String},
    'company': {type: String},
    'money': {type: Number}
  },
  chat: {

  }
}

for (let x in models) {
  mongoose.model(x, new mongoose.Schema(models[x]))
}

module.exports = {
  getModel: function(name){
    return mongoose.model(name)
  }
}