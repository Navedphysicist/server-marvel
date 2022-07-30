const express = require("express");
const chatRouter = require("./routes/Chat.route");
const msgRouter = require("./routes/Message.route");
const userRouter = require("./routes/User.route");

const cookieParser = require("cookie-parser");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");
const { Socket } = require("socket.io");
// const { Socket } = require("socket.io");
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
   
  },
});

let activeUsers = [];

io.on("connection", (socket) => {
  console.log("New User", socket.id);
  socket.on("newUser", (newUserId) => {
    if (!activeUsers.some((user) => user.userId === newUserId)) {
      activeUsers.push({
        userId: newUserId,
        socketId: socket.id,
      });
    }

    io.emit("getUsers", activeUsers);
  });

  socket.on("sendMessage", (msg) => {
    const { receiverId } = msg;
    const user = activeUsers.find((user) => user.userId === receiverId);
    if (user) {
      io.to(user.socketId).emit("receiveMessage", msg);
    }
  });

  socket.on("disconnect", () => {
    activeUsers = activeUsers.filter((user) => user.socketId != socket.id);
    io.emit("getUsers", activeUsers);
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

app.use(cors(corsOptions));

app.use("/chat", chatRouter);
app.use("/msg", msgRouter);
app.use("/user", userRouter);

module.exports = http;
