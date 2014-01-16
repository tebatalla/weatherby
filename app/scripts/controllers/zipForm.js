'use strict';

angular.module('weatherbyApp').provider('Weather', function () {

    var apiKey = '';

    this.setApiKey = function (key) {
        if (key) {
            this.apiKey = key;
        }
    };

    this.getUrl = function (type, ext) {
        var returnString = "";
        returnString += 'http://api.wunderground.com/api/' + this.apiKey
        returnString += '/' + type + '/q/' + ext + '.json';
        return returnString;
    };

    this.$get = function ($q, $http, formatWeather) {
        var self = this;
        return {
            getWeatherForecast: function (location) {
                var deferred = $q.defer();



                $http({
                    method: 'JSONP',
                    url: self.getUrl('hourly', location.zipCode) + "?callback=JSON_CALLBACK",
                    cache: true
                }).success(function (data) {
                    // The wunderground API returns the 
                    // object that nests the forecasts inside
                    // the forecast.simpleforecast key
                    console.log(data);
                    deferred.resolve(formatWeather.format(data));

                }).error(function (err) {
                    deferred.reject(err);

                });

                return deferred.promise;
                //return (deferred.promise);
            }
        };
    };
})
    .config(function (WeatherProvider) {
        WeatherProvider.setApiKey('4227e08d470f4fe8');
    });

angular.module('weatherbyApp')
	.service('formatWeather', ['userTolerance', function(userTolerance){
		return {
            format: function (data) {
                if (data.hourly_forecast[0].snow.english > userTolerance.customOutput('snow',0)) {
                    return 'It\'s going to snow! Don\'t forget to wear some snow boots and a winter jacket!';
                }
                else if (data.hourly_forecast[0].feelslike.english < userTolerance.customOutput('feelsLike',20) && data.hourly_forecast[0].wspd.english >= userTolerance.customOutput('wind',15)) {
                    return 'It\'s going to be cold AND windy. Wear several layers, with a windbreaker to withstand the biting wind!';
                }
                else{
                	return 'Damn son, it\'s gonna be cloudy... I think...'
                }

            }
		}
	}]);

angular.module('weatherbyApp')
	.factory('userTolerance', function(){
		
		var userSettings = {};
		//sample user has a feelslike threshold 20 degrees higher than average
		userSettings["feelsLike"] = 20;
		userSettings["wind"] = 3;
		userSettings["rain"] = 0.05;
		return{
			customOutput: function(type,weatherThreshold){
				for(var i in userSettings){
					if(i==type){
						console.log(i+': '+(userSettings[i] + weatherThreshold))
						return userSettings[i] + weatherThreshold;
					}
				}
				//if no custom setting exists, go with current threshold
				return weatherThreshold;

			}
		}
	});

angular.module('weatherbyApp')
	.controller('ZipFormCtrl', ['$scope', '$http', 'Weather', function ($scope, $http, Weather){

        $scope.defaultLocation = {
            code: "",
            name: ""
        };


        $scope.submit = function (location) {


            $scope.weather = {};

            var onSuccess = function (data) {
                $scope.weather.forecast = data;
                console.log(data);
            };

            var onError = function (err) {
                console.log(err);
            };

            Weather.getWeatherForecast(location)
                .then(onSuccess, onError);
        };

        $scope.reset = function () {
            $scope.location = angular.copy($scope.defaultLocation);
            $scope.weather = null;
        };

    }]);