var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, "node_modules/tw-elements")));

app.use('/', indexRouter);
app.use('/users', usersRouter);

var port = normalizePort(process.env.PORT || '850');
app.set('port', port);

app.listen(port, () => {
  console.log("working on " + port)
})

function normalizePort(val) {
  var parsedPort = parseInt(val, 10);

  if (isNaN(parsedPort)) {
    return val;
  }

  if (parsedPort >= 0) {
    return parsedPort;
  }

  return false;
}


// module.exports = app;
