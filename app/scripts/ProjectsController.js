myApp.controller('ProjectsController', ProjectsController);

function ProjectsController(GithubAPI) {
  var vm = this;

  // vm.showProject = function() {
  //
  // };

  vm.showIfClicked = function(type) {
    console.log(type);
    type = true;
    console.log(type);
  };

  // vm.showPortfolio = vm.showIfClicked;




  GithubAPI.githubRepos().then(function(response){
    vm.projects = response;
  }); // end githubRepos
} // end ProjectsPageController
