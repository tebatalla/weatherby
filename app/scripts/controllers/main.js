'use strict';

angular.module('weatherbyApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  })

function zipForm($scope) {
  $scope.master= {};

  $scope.update = function(zip) {
    $scope.master= angular.copy(zip);
  };

  $scope.reset = function() {
    $scope.zip = angular.copy($scope.master);
  };

  $scope.reset();
}
