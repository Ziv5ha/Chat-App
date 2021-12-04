const express = require('express');
const router = express.Router();
const moment = require('moment');
const jwt = require('jsonwebtoken');

const launchTime = moment();
const ChatRooms = [
  {
    name: 'global',
    msgs: [
      {
        sender: 'Server',
        msg: 'wellcome to the global chat room',
        time: launchTime,
        recievedByServer: true,
      },
    ],
    acvtiveUser: [],
    admins: [],
  },
];

router.get('/rooms', (req, res, next) => {
  const rooms = ChatRooms.map((room) => room.name);
  res.send(rooms);
});

router.post('/new-room/:room', (req, res, next) => {
  try {
    const { room } = req.params;
    const { authorization } = req.headers;
    const username = extractUserFromToken(authorization);
    const chatroom = ChatRooms.find(({ name }) => name === room);
    if (chatroom) throw 409;
    ChatRooms.push(roomConstructor(room, username));
  } catch (error) {
    if (error === 409) {
      res.status(409).send('Room already exists');
    } else {
      console.log(error);
      next(error);
    }
  }
});

router.get('/:room', (req, res, next) => {
  try {
    res.setHeader('Content-Type', 'text/event-stream');
    const { room } = req.params;

    setInterval(() => {
      const chatroom = ChatRooms.find(({ name }) => name === room);
      if (!chatroom) {
        res.status(404).send('Chat room not found');
        res.end();
      } else {
        let data = JSON.stringify(chatroom.msgs);
        res.write(`data: ${data}\n\n`);
      }
    }, 3000);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/:room', (req, res, next) => {
  const { room } = req.params;
  const { msg, sender } = req.body;
  const chatroom = ChatRooms.find(({ name }) => name === room);
  chatroom.msgs.push({
    sender,
    msg,
    time: moment(),
    recievedByServer: true,
  });
  console.log(msg, sender);
  res.send('message sent');
});

module.exports = router;

function extractUserFromToken(authorization) {
  const token = authorization.split(' ')[1];
  const user = jwt.verify(token, process.env.SECRET);
  console.log(user);
  return user;
}
function roomConstructor(room, creator) {
  const roomLaunchTime = moment();
  return {
    name: room,
    msgs: [
      {
        sender: 'Server',
        msg: `wellcome to ${room} chat room`,
        time: roomLaunchTime,
        recievedByServer: true,
      },
    ],
    acvtiveUser: [],
    admins: [creator],
  };
}
