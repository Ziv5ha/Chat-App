const express = require('express');
const router = express.Router();
const moment = require('moment');

const launchTime = moment();
const ChatRooms = [
  {
    name: 'Global',
    msgs: [
      {
        sender: 'Server',
        msg: 'wellcome to the global chat room',
        time: launchTime,
        recievedByServer: true,
      },
    ],
    acvtiveUser: [],
  },
];

// users TODO tranfer to DB
const users = [];
// users TODO tranfer to DB

router.get('/rooms', (req, res, next) => {
  const rooms = ChatRooms.map((room) => room.name);
  res.send(rooms);
});

router.get('/:room', (req, res, next) => {
  try {
    const { room } = req.params;
    const chatroom = ChatRooms.find(({ name }) => name === room);
    if (!chatroom) throw 404;
    res.send(chatroom);
  } catch (error) {
    if (error === 404) {
      res.status(404).send('Chat room not found');
    } else {
      console.log(error);
      next(error);
    }
  }
});

module.exports = router;
