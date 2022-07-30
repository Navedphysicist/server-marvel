const Message = require("../models/message.model");

const createMessage = async (req, res) => {
  const { userId, chatId, message } = req.body;

  let messageData;
  try {
    messageData = await Message.create({ userId, chatId, message });
    res.status(200).json({ messageData });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const getMessages = async (req, res) => {
  const { chatId } = req.params;

  let messageData;
  try {
    messageData = await Message.find({ chatId });
    res.status(200).json({ messageData });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

module.exports = {
  createMessage,
  getMessages,
};
