
var phishPeople = [{name: 'Phil', bio: 'I like long walks on the beach.', image: './assets/images/_phil.jpeg'}, {name: 'Celina', bio: 'I like pina coladas.', image: './assets/images/_celina.png'}, {name: 'Arri', bio: 'Check out these things! Arent they great?!', image:'./assets/images/_arrielle.jpeg'}, {name: 'Ed', bio:'beware of stingrays', image: './assets/images/_ed.jpeg' }];



var express = require('express');
var router = express.Router();


// router.use(bodyParser.urlencoded({extended: true}));  // NOTE: NEEDED?

router.get('/', function(req, res){
  res.send(phishPeople);
});

module.exports = router;
