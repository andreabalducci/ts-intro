var express = require('express');
var app = express();

var episodes = [
  {id: 1, title:'La minaccia fantasma', thumb: 'http://ia.media-imdb.com/images/M/MV5BMTQ4NjEwNDA2Nl5BMl5BanBnXkFtZTcwNDUyNDQzNw@@._V1_SX214_AL_.jpg', synopsis: 'The first episode.'},
  {id: 2, title:'L\'attacco dei cloni', thumb: 'http://ia.media-imdb.com/images/M/MV5BMTY5MjI5NTIwNl5BMl5BanBnXkFtZTYwMTM1Njg2._V1_SY317_CR13,0,214,317_AL_.jpg', synopsis: 'The second episode.'},
  {id: 3, title:'La vendetta dei Sith', thumb: 'http://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SY317_CR12,0,214,317_AL_.jpg', synopsis: 'The third episode.'},
  {id: 4, title:'Una nuova speranza', thumb: 'http://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX214_AL_.jpg', synopsis: 'The fourth episode.'},
  {id: 5, title:'L\'impero colpisce ancora', thumb: 'http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SY317_CR0,0,214,317_AL_.jpg', synopsis: 'The fifth episode.'},
  {id: 6, title:'Il ritorno dello Jedi', thumb: 'http://ia.media-imdb.com/images/M/MV5BMTQ0MzI1NjYwOF5BMl5BanBnXkFtZTgwODU3NDU2MTE@._V1._CR93,97,1209,1861_SX214_AL_.jpg', synopsis: 'Il titolo è volutamente sbagliato.'},
  {id: 7, title:'Il risveglio della forza', thumb: 'http://ia.media-imdb.com/images/M/MV5BMTUwMjU0MzQwNV5BMl5BanBnXkFtZTgwNzQwODUzNTE@._V1_SX214_AL_.jpg', synopsis: 'The seventh episode.'},
];


app.use(express.static('./build/swdb/'));

app.get('/api/episodes', function (req, res) {
  res.send(episodes);
});

app.get('/api/episode/:id', function(req, res){
  res.send(episodes[req.params.id - 1]);
});

var server = app.listen(process.env.port || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);

});