var express = require('express');
var app = express();

var episodes = [
  {id: 1, title:'abc'},
  {id: 2, title:'123'},
];


app.use(express.static('./build/swdb/'));

app.get('/api/episodes', function (req, res) {
  res.send(episodes);
});

var server = app.listen(process.env.port || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);

});