  myApp.controller('ProjectsController', ProjectsController);

  function ProjectsController(GithubAPI) {
    var vm = this;
    vm.showPortfolio = false;
    vm.showFlora = false;
    vm.showPraeco = false;
    vm.showTodo = false;
    vm.showBlocks = false;
    vm.showGallery = false;



    vm.showProject = function(project) {
      switch (project) {
        case 'portfolioTN':
          vm.showFlora = false;
          vm.showPraeco = false;
          vm.showTodo = false;
          vm.showBlocks = false;
          vm.showGallery = false;
          vm.showPortfolio = true;
          break;
        case 'floraTN':
          vm.showPraeco = false;
          vm.showTodo = false;
          vm.showBlocks = false;
          vm.showGallery = false;
          vm.showPortfolio = false;
          vm.showFlora = true;
          break;
        case 'praecoTN':
          vm.showTodo = false;
          vm.showBlocks = false;
          vm.showGallery = false;
          vm.showPortfolio = false;
          vm.showFlora = false;
          vm.showPraeco = true;
          break;
        case 'todo-listTN':
          vm.showBlocks = false;
          vm.showGallery = false;
          vm.showPortfolio = false;
          vm.showFlora = false;
          vm.showPraeco = false;
          vm.showTodo = true;
          break;
        case 'blocksTN':
          vm.showGallery = false;
          vm.showPortfolio = false;
          vm.showFlora = false;
          vm.showPraeco = false;
          vm.showTodo = false;
          vm.showBlocks = true;
          break;
        case 'galleryTN':
          vm.showPortfolio = false;
          vm.showFlora = false;
          vm.showPraeco = false;
          vm.showTodo = false;
          vm.showBlocks = false;
          vm.showGallery = true;
          break;
        } // end switch statement
        scroll(0,0);
      }; // end show project





    GithubAPI.githubRepos().then(function(response){
      vm.projects = response;
    }); // end githubRepos
  } // end ProjectsPageController
