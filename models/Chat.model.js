const {Schema,model} = require('mongoose')

const ChatSchema = new Schema({
    members:[{type:String}]

},
{
    timestamps:true
})

const Chat = model('Chat',ChatSchema)
module.exports = Chat
