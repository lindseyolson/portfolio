myApp.service('GithubAPI', function($http) {

  //Call to Github API to fetch profile info
    this.githubProfile = function(){
      return $http({
        method: 'GET',
        url: '/projects'
      }).then(function(response) {
        console.log('back with',response.data);
        return response.data;
      });
    };

    //Call to Github API to fetch list of repos
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
