var express = require('express');
var path = require('path');
var app = express();

// Using requst module to make HTTP requests from the server
// https://www.npmjs.com/package/request
var request = require('request');

// environment variables for Heroku
var username = process.env.USER_NAME || require('./githubauth').username;
var oauthToken = process.env.GIT_TOKEN || require('./githubauth').oauthToken;

var port = process.env.PORT || 1616;

app.use(express.static('public'));

var project_options = {
  url: 'https://api.github.com/users/' + username,
  headers: {
    'User-Agent': 'request',
    'Authorization': 'token ' + oauthToken
  }
};

// Moved API call into server to protect oAuthToken
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

// Moved API call into server to protect oAuthToken
app.get('/repos', function(req, res){
  request(repo_options, function (error, response, body) {
    if (response && response.statusCode == 200) {
      res.send(body);
    } else {
      res.sendStatus(500);
    }
  });
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.listen(port, function() {
  console.log('listening on port:', port);
});
