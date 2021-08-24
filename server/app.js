var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var contactsRouter = require('./routes/contacts');
var loginRouter = require('./routes/login');

var file = require('./json_mock.json')

var mongoose = require('mongoose')
mongoose.connect('mongodb://mongodb:27017/test',{useNewUrlParser : true})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'CONNECTION ERROR'));
db.once('open', async function(){
  console.log('connected!')
  console.log('insering users...')

  db.collections['users'].drop( function(err) {
    console.log('collection restarted');
});
  db.collections['users'].insertMany(file, function(err) {
    console.log('collection inserted');
  });

})

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRouter);
app.use('/contacts', contactsRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


