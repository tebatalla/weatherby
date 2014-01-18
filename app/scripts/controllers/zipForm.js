'use strict';

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