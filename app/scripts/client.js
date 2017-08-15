var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/partials/home.html',
    controller: 'ProfileController as pc'
  }).when('/web_dev', {
    templateUrl: 'views/partials/web_dev.html',
    controller: 'ProjectsController as pc'
  }).when('/artwork', {
    templateUrl: 'views/partials/artwork.html',
  }); // end route provider
}); // end app config

myApp.controller('ProfileController', ProfileController);

function ProfileController(GithubAPI){
  var vm = this;

  GithubAPI.githubProfile().then(function(response){
    console.log(response);
    vm.profile = response;
  }); // end githubProfile
} // end ProfileController
