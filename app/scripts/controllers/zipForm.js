'use strict';
angular.module('weatherbyApp', ['ngRoute']).provider('Weather', function() {

	var apiKey = '';

	this.setApiKey = function(key) {
		if (key) this.apiKey = key;
	};

	this.getUrl = function(type, ext) {
		return 'http://api.wunderground.com/api/' + 
		this.apiKey + '/' + type + '/q/' +
		ext + '.json';
	};

	this.$get = function($q, $http) {
		var self = this;
			return {
			getWeatherForecast: function(zipCode) {
				var d = $q.defer();
				$http({
					method: 'GET',
					url: self.getUrl('forecast', zipCode),
					cache: true
					}).success(function(data) {
					// The wunderground API returns the 
					// object that nests the forecasts inside
					// the forecast.simpleforecast key
					d.resolve(data.forecast.simpleforecast);
					}).error(function(err) {
					d.reject(err);
					});
				return d.promise;
			}
		};
	};
})
.config(function(WeatherProvider) {
  WeatherProvider.setApiKey('4227e08d470f4fe8');
})

angular.module('weatherbyApp')
  .controller('ZipFormCtrl', ['Weather','$scope', '$http', function($scope, $http, Weather) {

  $scope.master = {};

  $scope.submit = function(zip) {
  	
  	$scope.weather = {}
    Weather.getWeatherForecast(zip)
    .then(function(data) {
      $scope.weather.forecast = data;
    });
  };

  $scope.reset = function() {
    $scope.zip = angular.copy($scope.master);
    $scope.weather = null;
  };

  $scope.reset();
});
