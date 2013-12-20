'use strict';

// just adding this to the main module for simplicity right now.
angular.module('weatherbyApp')
  .factory('mockedApi', function(){
    // this factory returns an object with functions on it
    return{
      getForecastData: function(){
        return {data: 1};
      }
    }

  });
