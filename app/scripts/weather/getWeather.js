'use strict'

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