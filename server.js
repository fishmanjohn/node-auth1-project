const express = require('express');
const server = express();
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')

const dbConnection = require('./database/dbConfig')

const authRouter = require('./database/auth/auth-router')
const userRouter = require('./database/users/users-router')

const sessionConfig = {
    name: 'thinMint',
    secret: process.env.SESSION_SECRET || 'this is a secret shhhhh',
    cookie:{
        maxAge: 1000 * 60,
        secure:false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
    // store: new KnexSessionStore({
    //     knex: dbConnection
    // })
}

server.use(express.json())
server.use(session(sessionConfig))
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter)

module.exports = server;
