const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');
const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
.get( (req,res,next) => {
      User.find({})
      .then((users) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(users);
      }, (err) => next(err))
      .catch((err) => next(err));
})
.post((req, res, next) => {
    User.create(req.body)
    .then((user) => {
       
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /user');
})
.delete((req, res, next) => {
  res.statusCode = 403;
  res.end('Delete operation not supported on /user');
});


module.exports = userRouter;