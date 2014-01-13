'use strict';
angular.module('weatherbyApp').provider('Weather', function() {

  var apiKey = '';

  this.setApiKey = function(key) {
    if(key) {
      this.apiKey = key;
    }
  };

  this.getUrl = function(type, ext) {
    var returnString = "";
    returnString += 'http://api.wunderground.com/api/' + this.apiKey 
    returnString += '/' + type + '/q/' + ext + '.json';
    return returnString;
  };

  this.$get = function($q, $http) {
    var self = this;
      return {
        format: function() {
          console.log('format');
        },
        getWeatherForecast: function(location) {
        var deferred = $q.defer();



        $http({
          method: 'JSONP',
          url: self.getUrl('forecast', location.zipCode) + "?callback=JSON_CALLBACK",
          cache: true
          }).success(function(data) {
            // The wunderground API returns the 
            // object that nests the forecasts inside
            // the forecast.simpleforecast key
            console.log('getWeather')
            deferred.resolve(data.forecast.simpleforecast);

          }).error(function(err) {
            deferred.reject(err);

          });

        return deferred.promise;
      }
    };
  };
})
.config(function(WeatherProvider) {
  WeatherProvider.setApiKey('4227e08d470f4fe8');
});

angular.module('weatherbyApp')
  .controller('ZipFormCtrl', ['$scope', '$http', 'Weather', function($scope, $http, Weather) {

  $scope.defaultLocation = {
    code: "",
    name: ""
  };

  $scope.submit = function(location) {
    $scope.weather = {};

    var onSuccess = function(data) {
      $scope.weather.forecast = data;
      Weather.format($scope.weather.forecast)
    };

    var onError = function(err) {
      console.log(err);
    };

    Weather.getWeatherForecast(location)
      .then(onSuccess, onError);
  };

  $scope.reset = function() {
    $scope.location = angular.copy($scope.defaultLocation);
    $scope.weather = null;
  };

  $scope.reset();
}]);
