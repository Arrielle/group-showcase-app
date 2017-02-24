
var phishPeople = [{name: 'phil', bio: 'I like long walks on the beach.', image: './assets/images/_phil.jpeg'}, {name: 'celina', bio: 'I like pina coladas.', image: './assets/images/_celina.png'}, {name: 'arri', bio: 'Check out these things! Arent they great?!', image:'./assets/images/_arrielle.jpeg'}, {name: 'ed', bio:'beware of stingrays', image: './assets/images/_ed.jpeg' }];



var express = require('express');
var router = express.Router();


// router.use(bodyParser.urlencoded({extended: true}));  // NOTE: NEEDED?

router.get('/', function(req, res){
  res.send(phishPeople);
});

module.exports = router;
