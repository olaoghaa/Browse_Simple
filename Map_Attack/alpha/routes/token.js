var express = require('express');
var router = express.Router();
var TokenService = require('../tokenService');
var toke = require('../public/javascripts/twiliochat');

router.get('/', function(req, res, next) {
  res.render('example2', { title: 'Chatbot' });
});


// POST /token
router.post('/', function(req, res) {
  console.log(req.body);
  var deviceId = req.body.device;
  var identity = req.body.identity;

  var token = TokenService.generate(identity, deviceId);
  console.log(token);
  res.json({
    identity: identity,
    token: token.toJwt(),
  });

 
});


module.exports = router;
