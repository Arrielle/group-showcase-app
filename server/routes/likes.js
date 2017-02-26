


var express = require('express');
var router = express.Router();
var likesObject = {
phil: 0,
arri: 0,
ed: 0,
celina: 0
};

function likesObjectFunc (req, res) {
  res.send(likesObject);
}

router.get('/', function likesObjectFunc (req, res) {
  res.send(likesObject);
});

router.post('/', function likesObjectFunc (req, res) {
  likesObject = response;
  console.log(likesObject);
});



// router.use(bodyParser.urlencoded({extended: true}));  // NOTE: NEEDED?
//
// router.get('/', function(req, res){
//   res.send(likesObject);
// });

module.exports = likesObjectFunc;
