/*
  Brandon Wood
  2/19/2018
  Chime server source code.
*/

// App
var express = require('express');
var app = express();

// Request parsing
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set port
app.set('port', 8000 || env.PORT);


// Initialize twitter API
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 'wC7FDgbROiuMgPHxuKQEOdnsQ',
  consumer_secret: 'RgSLShtYIwgLU4mlgA0rK5QmxGljsfy1UmItXNxAMwcfH9IOsO',
  access_token_key: '965628201270677504-omRXi2ENemOZE0yGkHfyr73JaTlUx6s',
  access_token_secret: 'Z0ls8rPhaOqF3DZPOdgnyRARPWhheAxesK2XEuSJQ089t'
});

// Utilities
var path = require('path');

// Server static files
app.use(express.static('public'));


// Routing
var commonRoutes = ['/', '/index', '/home', ''];

for(var i = 0; i < commonRoutes.length; i++){
  app.get(commonRoutes[i], function(req, res){
    console.log('Request made at', req.url);
    res.sendFile(path.resolve(__dirname, 'public/html/index.html'));
  });
}

// Fetch data
app.post('/names', function(req, res){
  if(req.body.name){
    client.get('/followers/list', {screen_name: req.body.name}, function(err, ids, raw){
      if(!err){
        res.send({
          ids: ids.users
        });
      }else{
        res.send({ids: []});
      }
    });
  }
});


app.post('/ids', function(req, res){
  if(req.body.id){
    client.get('/followers/list', {user_id: req.body.id}, function(err, ids, raw){
      if(!err){
        res.send({
          ids: ids.users
        });
      }else{
        res.send({ids: []});
      }
    })
  }
});


// Listening
app.listen(app.get('port'), function(){
    console.log('Listening to port', app.get('port'), '...');
});
