myApp.service('GithubAPI', function($http) {
  //Enter your token and username here:

  //Call to Github API to fetch user's profile info
    this.githubProfile = function(){
      return $http({
        method: 'GET',
        url: '/projects'
      }).then(function(response) {
        console.log('back with',response.data);
        return response.data;
      });
    };

    //Call to Github API to fetch list of user's repos
    this.githubRepos = function(){
      return $http({
        method: 'GET',
        url: '/repos',
      }).then(function(response) {
        console.log(response.data);
        return response.data;
      });
    };
  });
