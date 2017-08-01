var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/partials/home.html',
    controller: 'ProfileController as pc'
  }).when('/projects', {
    templateUrl: 'views/partials/about_me.html',
    controller: 'ProjectsPageController as ppc'
  }); // end route provider
}); // end app config

myApp.controller('ProfileController', ProfileController);
myApp.controller('ProjectsPageController', ProjectsPageController);

function ProfileController(GithubAPI){
  var vm = this;

  GithubAPI.githubProfile().then(function(response){
    console.log(response);
    vm.profile = response;
  }); // end githubProfile
} // end ProfileController

function ProjectsPageController(GithubAPI) {
  var vm = this;

  GithubAPI.githubRepos().then(function(response){
    vm.projects = response;
  }); // end githubRepos
} // end ProjectsPageController
