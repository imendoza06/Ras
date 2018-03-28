var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const session = require("express-session");
const pgSessionStore = require("connect-pg-simple")(session);
const passport = require("passport");

var index = require('./routes/index');
var users = require('./routes/users');
var authUsers = require("./routes/auth");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Session Middleware
app.use(
  session({
    store: new pgSessionStore({
      conString: "postgres://c4q:c4q@localhost:5432/rasdb"
    }),
    secret:
      "\x02\xf3\xf7r\t\x9f\xee\xbbu\xb1\xe1\x90\xfe'\xab\xa6L6\xdd\x8d[\xccO\xfe",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

//routes 
app.use('/', index);
app.use('/users', users);
app.use('/auth', authUsers);

app.get("/session", function(req, res) {
  console.log("Inside the session callback function");
  console.log(req.sessionID);
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views += 1;
  }
  res.json({
    status: "ok",
    frequency: req.session.views,
    session_id: req.sessionID
  });
});
app.get("/authrequired", function(req, res) {
  console.log("Inside GET /authrequired callback");
  console.log(`User authenticated? ${req.isAuthenticated()}`);
  if (req.isAuthenticated()) {
    res.send("you hit the authentication endpoint\n");
  } else {
    res.redirect("/");
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
