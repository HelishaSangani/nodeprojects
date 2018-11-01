var express = require('express');
var indexRouter = require('./routes/index');
var ridesRouter = require('./routes/rides');
var path = require('path');
var bodyParser = require('body-parser');
var request = require('ajax-request');
var app = express();


//bodyparser 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//For crossorigin
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// request.post({
//   url : "http://127.0.0.1:8080/rides/allride"}, function(err, res, body) {
//     console.log("post called!!!    " + res);
// });
 



app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.urlencoded({ extended: false,  useNewUrlParser: true }));
app.get('/favicon.ico', (req, res) => res.status(204));
app.use(express.static('public'));
app.use('/', indexRouter);
app.use('/rides', ridesRouter);

app.listen(8080);

module.exports = app;
