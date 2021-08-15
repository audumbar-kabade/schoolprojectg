var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var cron = require('node-cron');

var indexRouter = require('./routes/index');
let studentRoute= require('./routes/student.routes');
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// cron.schedule('* * * * *', () => {
//     console.log('running a task every minute');
//   });
app.use('/', indexRouter);
app.use('/student',studentRoute);

module.exports = app;
