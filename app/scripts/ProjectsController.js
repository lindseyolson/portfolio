myApp.controller('ProjectsController', ProjectsController);

function ProjectsController(GithubAPI) {
  var vm = this;

  GithubAPI.githubRepos().then(function(response){
    vm.projects = response;
  }); // end githubRepos
} // end ProjectsPageController
