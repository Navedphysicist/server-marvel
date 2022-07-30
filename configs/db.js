const mongoose = require('mongoose')

const db = 'mongodb+srv://naved:transchat123@transchat.i2ikj6q.mongodb.net/?retryWrites=true&w=majority'

const connect = async()=>{
 return await mongoose.connect(db)
}
module.exports = {connect,db}