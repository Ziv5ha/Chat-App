require('dotenv').config();
const jwt = require('jsonwebtoken');
function auth(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    // res.status(401).send('Access Token Required');
    // return;
    next(401);
  }
  try {
    const token = authorization.split(' ')[1];
    console.log(token);
    const user = jwt.verify(token, process.env.SECRET);
    next();
  } catch (error) {
    // res.status(403).send('Invalid Access Token');
    next(403);
  }
}

module.exports = auth;
