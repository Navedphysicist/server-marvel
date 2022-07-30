const { tryWrapperForImpl } = require('whatwg-url/lib/utils');
const Chat  = require('../models/Chat.model')

 const createChat = async (req, res) => {

    const { userId, receiverId } = req.body;

    let chatData
    try {
        chatData = await Chat.create({ members: [ userId, receiverId ] })
        res.status(200).json({ chatData })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

 const getUserChats = async (req,res)=>{
  const {userId} = req.params;

  let chatData
    try {
        chatData = await Chat.find({members:{$in:[userId]}})
        res.status(200).json({ chatData })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
 
}

 const getChat = async (req,res)=>{
   
    const{userId,receiverId} = req.params;
     let chatData
     try{
        chatData = await Chat.findOne({members:{$all:[userId,receiverId]}})
        res.status(200).json({chatData})
     }catch(err){

     return res.status(500).json({err:err.message})
      }
    

 }

module.exports ={
    createChat, 
    getUserChats,
    getChat
}

