var express = require('express');
var router = express.Router();
var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('scream', function() {
console.log('A scream is detected!');
});
eventEmitter.emit('scream');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Map Attack' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Map Attack' });
});

router.get('/example', function(req, res, next) {
  res.render('example', { title: 'Map Attack' });
});

router.get('/example2', function(req, res, next) {
  res.render('example2', { title: 'Map Attack' });
});

function createList(){
	
}

/*
* HTTP Cloud Function.
*
* @param {Object} req Cloud Function request context.
* @param {Object} res Cloud Function response context.
*/
exports.helloHttp = function helloHttp (req, res) {
  response = "This is a sample response from your webhook!" //Default response from the webhook to show it's working


  res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
  res.send(JSON.stringify({ "speech": response, "displayText": response 
  //"speech" is the spoken version of the response, "displayText" is the visual version
  }));
};





module.exports = router;