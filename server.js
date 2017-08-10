// requires
var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
require('dotenv').config({path:'config.env'});

// environment variables
var username = process.env.USERNAME;
var oauthToken = process.env.OAUTH_TOKEN;
var port = process.env.PORT || 1616;

app.use(express.static('app'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'app/views/index.html'));
});

var project_options = {
  url: 'https://api.github.com/users/' + username,
  headers: {
    'User-Agent': 'request',
    'Authorization': 'token ' + oauthToken
  }
};

app.get('/projects', function(req, res){
  request(project_options, function (error, response, body) {
    if (response && response.statusCode == 200) {
      res.send(body);
    } else {
      res.sendStatus(500);
    }
  });
});

var repo_options = {
  url: 'https://api.github.com/users/' + username + '/repos',
  headers: {
    'User-Agent': 'request',
    'Authorization': 'token ' + oauthToken
  }
};

app.get('/repos', function(req, res){
  request(repo_options, function (error, response, body) {
    if (response && response.statusCode == 200) {
      res.send(body);
    } else {
      res.sendStatus(500);
    }
  });
});



app.listen(port, function() {
  console.log('listening on port:', port);
});
