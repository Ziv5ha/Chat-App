const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    await testUsername(username);
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.insertMany({ username, password: hashedPassword });
    res.status(201).send('Register Success');
  } catch (error) {
    //   res.status(500).send();
    console.log(error);
    next(error);
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username }).exec();
  if (!user) {
    res.status(404).send('cannot find user');
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      const accessToken = jwt.sign(
        { username: user.username },
        process.env.SECRET
      ); //, {
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
  const exsistingUser = await User.find({ username: name });
  if (exsistingUser.length > 0) throw 409;
}

module.exports = router;
