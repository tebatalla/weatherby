'use strict';

angular.module('weatherbyApp')
  .controller('ZipFormCtrl', function($scope, $http, mockedApi) {

  $scope.master = {};

  $scope.submit = function(zip) {
    $scope.weather = null;

    $http.jsonp('http://api.wunderground.com/api/4227e08d470f4fe8/forecast/q/'+zip.code+'.json?callback=JSON_CALLBACK')
      .success(function(res){
        console.log('success');
    
        var forecast = res.forecast;
        console.log(forecast);

        $scope.weather = forecast.txt_forecast;
      })
      .error(function(error){
        console.log('error');
        console.log(error);

        $scope.weather = error.message || "Request failed";
        $scope.status = error.status;
      })

  };

  $scope.reset = function() {
    $scope.zip = angular.copy($scope.master);
    $scope.weather = null;
  };

  $scope.reset();
});
