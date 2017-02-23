
var phishPeople = [{name: 'Phil', bio: 'I like long walks on the beach.', image: 'image.png'}, {name: 'Celina', bio: 'I like pina coladas.', image: 'image2.png'}, {name: 'Arri', bio: 'Check out these things! Arent they great?!', image:'image3.png'}, {name: 'Ed', bio:'beware of stingrays', image: 'image4.png' }];



var express = require('express');
var router = express.Router();


// router.use(bodyParser.urlencoded({extended: true}));  // NOTE: NEEDED?

router.get('/', function(req, res){
  res.send(phishPeople);
});

module.exports = router;
