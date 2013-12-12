'use strict';

angular.module('weatherbyApp')
  .controller('ZipFormCtrl', function($scope, $http) {

  $scope.master = {};

  $scope.submit = function(zip) {
  	$scope.weather = null;

    // Seems jsonp never comes up except in small side projects - your gut with the 'GET' was more correct.
    // Only problem is the Access-Control-Allow-Origin errors, which are related to CORS
    // (Cross-origin Rsomething Ssomething) which is too complicated to worry about for now.
    // The short answer is that the origin and destination need to agree on some headers...we can look into it later. 
    // for now, jsonp will be easier, just comes with this goofy ?callback=JSON_CALLBACK string.
  	$http.jsonp('http://api.wunderground.com/api/4227e08d470f4fe8/forecast/q/'+zip.code+'.json?callback=JSON_CALLBACK')
  		//i normally don't agree with shortening variable names, but res = response is pretty universal
      .success(function(res){
        console.log('success');
        
        // do with this what you will :)
        var forecast = res.forecast;
        console.log(forecast);

        // console.log-ing this shows forcastday is an array, so you can't pull fctext directly from it,
        // you'll need forecastday[0].fctext or another implementation (ng-repeat maybe? or were you already thinking that?)
  			$scope.weather = forecast.txt_forecast.forecastday.fctext;
  		})
      // really glad you handled this error :)
  		.error(function(error){
        console.log('error');
        console.log(error);

  			$scope.weather = error.message || "Request failed";
  			$scope.status = error.status;
  		})

  };

  $scope.reset = function() {
    $scope.zip = angular.copy($scope.master);
  };

  $scope.reset();
});
