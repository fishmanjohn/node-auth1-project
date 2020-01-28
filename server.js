const express = require('express');
const server = express();

const authRouter = require('./database/auth/auth-router')
const userRouter = require('./database/users/users-router')
server.use(express.json())
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter)

module.exports = server;
