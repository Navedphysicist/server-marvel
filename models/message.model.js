const {Schema,model} = require('mongoose')

const MessageSchema = new Schema({
    message:{type:String,required:true},
    userId :{type:Schema.Types.ObjectId, ref:'User'},
    chatId:{type:Schema.Types.ObjectId, ref:'User'}

},
{
    timestamps:true
})

const Message = model('Message',MessageSchema)
module.exports = Message;
