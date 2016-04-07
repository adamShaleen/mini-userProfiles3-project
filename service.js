angular.module('userProfiles').service('mainService', function($http, $q) {

    this.getUsers = function() {
      var deferred = $q.defer();
      $http({
          method: 'GET',
          url: 'http://reqres.in/api/users?page=1'
      }).then(function(response) {
        var parsedResponse = response.data.data;
        for(var i = 0; i < parsedResponse.length; i++) {
          parsedResponse[0].first_name = 'Todd';
          parsedResponse[0].last_name = 'Gootch';
          parsedResponse[1].first_name = 'Hugh';
          parsedResponse[1].last_name = 'Jass';
          parsedResponse[2].first_name = 'Chotch';
          parsedResponse[2].last_name = 'McGee';
        }
        deferred.resolve(parsedResponse);
    });
      return deferred.promise;
  };
  });
