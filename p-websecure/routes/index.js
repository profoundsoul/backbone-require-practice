var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
    title: '<h1>Express</h1>'
    , users: [{ username: 'Wilson' },
    { username: 'Wilson Zhong' },
    { username: 'Zhong Wei' }]
  });
});


router.get('/refrect', function (req, res) {

  var search = req.query.s;
  console.log(search);
  res.render('refrect', {
    search: search || '',
    list:[]
  });
});


module.exports = router;
