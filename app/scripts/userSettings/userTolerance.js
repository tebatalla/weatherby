'use strict'

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
						//console.log(i+': '+(userSettings[i] + weatherThreshold))
						return userSettings[i] + weatherThreshold;
					}
				}
				//if no custom setting exists, go with current threshold
				return weatherThreshold;

			}
		}
	});