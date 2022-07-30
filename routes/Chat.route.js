const { Router } = require('express')
const { createChat, getUserChats, getChat } = require('../controllers/Chat.controller')
const protect = require("../middlewares/protect")
const chatRouter = Router()

chatRouter.post('/', protect, createChat)
chatRouter.get('/:userId', protect, getUserChats)
chatRouter.get('/find/:userId/:receiverId', protect, getChat)

module.exports = chatRouter;