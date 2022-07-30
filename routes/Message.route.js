const {Router} = require('express')
const {createMessage,getMessages} = require('../controllers/Message.controller')
const protect = require('../middlewares/protect')

const msgRouter = Router()

msgRouter.post('/',protect,createMessage)
msgRouter.get('/:chatId',protect,getMessages)


module.exports = msgRouter;