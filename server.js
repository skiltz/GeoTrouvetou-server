// Generated by CoffeeScript 1.7.1

/*
 Requires
 */
var app, client, express;
var port = process.env.PORT || 8080;
var ip = process.env.IP || 'localhost';
express = require("express");



/*
 Configuration
 */


app = express();

app.use(express.logger("dev"));

app.use(express.bodyParser());

app.use(express["static"](__dirname + "/public"));

app.use(express.errorHandler({
  dumpExceptions: true,
  showStack: true
}));

app.get('/', function(req, res) {
  return res.sendfile('./public/index.html');
});

app.listen(port,ip, function() {
  return console.log("port: "+port);
});
