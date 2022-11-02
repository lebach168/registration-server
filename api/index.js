var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
const cors = require("cors");
const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}



var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors(corsOptions));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'jade');
app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use(function (req, res, next) {
  next(createError(404));
});

// error handler

var http = require('http');

var port = (process.env.PORT || '3001');
app.set('port', port);



var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
