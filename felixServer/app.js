var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var authenticate = require('./authenticate');
var config = require('./config');
var dotenv = require('dotenv').config();
var path = require('path');
console.log(dotenv.parsed);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var openworldsRouter = require('./routes/openworlds');

const mongoose = require('mongoose');
const connect = mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

connect.then((db) => {
  console.log('Connected correctly to the Server');
  console.log('Connected correctly to the MongoDB');
},(err) => { console.log(err); });

var app = express();
app.all('*', (req, res, next)=> {
  if(req.secure){
    return next();
  }
  else {
    res.redirect(307, 'https://'+req.hostname+":"+app.get('secPort')+req.url);
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set("view engine", "ejs");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/openworlds', openworldsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('../views/error.jade');
});

module.exports = app;
