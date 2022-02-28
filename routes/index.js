var express = require('express');
var router = express.Router();
let ServercarArray = [];

let carObject = function (pData, pType, pYear) {
  this.data = pData;
  this.type = pType;
  this.year = pYear;
}
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('index.html');
});


router.get('/getAllData', function(req, res, next) {
  c1 = new carObject("Toyota","SUV",2209);
  c2 = new carObject("Prius","Sedan",2009);
  c3 = new carObject("Kar","Coupe",2019);
  ServercarArray.push(c1);
  ServercarArray.push(c2);
  ServercarArray.push(c3);

  res.status(200).json(ServercarArray);
});

module.exports = router;
