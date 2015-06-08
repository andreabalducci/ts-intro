var express = require('express');
var app = express();

var episodes = [
  {id: 1, title:'La minaccia fantasma', thumb: 'http://ia.media-imdb.com/images/M/MV5BMTQ4NjEwNDA2Nl5BMl5BanBnXkFtZTcwNDUyNDQzNw@@._V1_SX214_AL_.jpg'},
  {id: 2, title:'L\'attacco dei cloni', thumb: 'http://ia.media-imdb.com/images/M/MV5BMTY5MjI5NTIwNl5BMl5BanBnXkFtZTYwMTM1Njg2._V1_SY317_CR13,0,214,317_AL_.jpg'},
  {id: 3, title:'La vendetta dei Sith', thumb: 'http://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SY317_CR12,0,214,317_AL_.jpg'},
  {id: 4, title:'Una nuova speranza', thumb: 'http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX214_AL_.jpg'},
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