var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const globalErrorHandler = require("./utils/globalErrorHandler")
var healthRouter = require('./routes/health');
var usersRouter = require('./routes/users');
var tasksRouter = require('./routes/tasks');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/health', healthRouter);
app.use('/users', usersRouter);
app.use('/api/tasks', tasksRouter);
app.use(function (err, req, res, next) {
    console.log(err);
    let errorMessage = err.message;
    if(err.httpStatus === 500 && process.env.NODE_ENV === "production") {
        errorMessage = "Internal Server Error";
    }
    res.status(err.httpStatus || 500).json({error: true, message: errorMessage});
});

module.exports = app;
