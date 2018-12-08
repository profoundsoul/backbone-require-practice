var express = require('express');
var router = express.Router();
var fs = require('fs')

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

router.get('/richtext', function (req, res) {
    var search = req.query.s;
    console.log(search);
    res.render('richtext', {
        search: search || '',
        list:[]
    });
});

router.get('/collectInfo', function(req, res){
    var q = req.query;
    var myDate = new Date();
    fs.appendFile('./message.txt', myDate.toLocaleString() + '\n' + q.site + q.token + '\n\n',function(err){
        if(err) console.log('写文件操作失败');
        else console.log('写文件操作成功');
    });
})

module.exports = router;
