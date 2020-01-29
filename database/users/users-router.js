const express = require('express')

const Users = require('./users-model.js');
const router = express.Router();

router.get('/',protected, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

function showMe (req,res,next){
    console.log(req.session)
    next();
};

function protected(req, res, next) {
    if (req.session && req.session.user) {
      next();
    } else {
      res.status(401).json({ message: 'you shall not pass!!' });
    }
  }

module.exports = router;
