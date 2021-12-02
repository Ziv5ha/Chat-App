const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    testUsername(username);
    const hashedPassword = await bcrypt.hash(password, 10);
    User.insertMany({ username, password: hashedPassword });
    res.status(201).send('Register Success');
  } catch (error) {
    //   res.status(500).send();
    console.log(error);
    next(error);
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = User.findOne((user) => user.username === username);
  if (!user) {
    res.status(404).send('cannot find user');
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign({ name: user.name }, process.env.SECRET); //, {
      //     expiresIn: '10s',
      //   });
      //   const refreshToken = jwt.sign({ name: user.name }, secret);
      //   REFRESHTOKENS.push(refreshToken);
      res.send({
        accessToken,
        // refreshToken,
        // username,
      });
    } else {
      res.status(403).send('User or Password incorrect');
    }
  } catch (error) {
    console.log(error);
  }
});

async function testUsername(name) {
  const exsistingUser = await User.find(({ username }) => username === name);
  if (exsistingUser.length > 0) throw 409;
}

module.exports = router;
