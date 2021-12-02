const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// const RoomsInfo = require('./models/roomInfoModel');
//// const authRouter = require('./routers/auth');
const chatRouter = require('./routers/chatRouter');
const userRouter = require('./routers/userRouter');
const auth = require('./middleware/authMiddleware');
const errorHandler = require('./error-handler/error-handler');

mongoose.connect(process.env.DATABASE).then(() => {
  console.log('DB connected');
});

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

//// app.use(express.urlencoded({ extended: false }));
//// app.use('/auth', authRouter);

app.use('/user', userRouter);
app.use(auth);
app.use('/chat', chatRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`running on ${port}`);
});
