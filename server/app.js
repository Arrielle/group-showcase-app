console.log('Starting up the server...');

var phishPeople = [{name: 'Phil', bio: 'I like long walks on the beach.', image: 'image.png'}, {name: 'Celina', bio: 'I like pina coladas.', image: 'image2.png'}, {name: 'Arri', bio: 'Check out these things! Arent they great?!', image:'image3.png'}, {name: 'Ed', bio:'beware of stingrays', image: 'image4.png' }];


var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/people', function(req, res){
  res.send(phishPeople);
}); 

app.use(express.static('server/public'));
app.listen(3000);
