'use strict';

angular.module('weatherbyApp');

function zipForm($scope, $http) {
  $scope.master= {};

  $scope.submit = function(zip) {
	$scope.weather = null;

  	$http({method: 'GET', url: 'http://api.wunderground.com/api/4227e08d470f4fe8/forecast/q/'+zip.code+'.json'}).
  		success(function(forecast){
  			$scope.weather = forecast.txt_forecast.forecastday.fctext;
  		}).
  		error(function(data,status){
  			$scope.weather = data || "Request failed";
  			$scope.status = status;
  		})
  	
  };

  $scope.reset = function() {
    $scope.zip = angular.copy($scope.master);
  };

  $scope.reset();
}
