'use strict'

//This service outputs the weather object from Weather service to output clothing recommendations
//userTolerance stores and applies the logic for a user's custom preferences
angular.module('weatherbyApp')
	.service('formatWeather', ['userTolerance', function(userTolerance){
		return {
            format: function (data) {

                var feelsLike = data.hourly_forecast[0].feelslike.english;

                var userFeelsLike = userTolerance.customOutput('feelsLike',feelsLike);
                
                if (data.hourly_forecast[0].snow.english > userTolerance.customOutput('snow',0)) {
                	if (feelsLike < userTolerance.customOutput('feelsLike',-20)) {
	                    return 'It\'s going to be miserably cold and snowy. Wear several layers, with undergarments made of wool. '
	                    	+ 'Wear two layers of socks or more and snow boots. If you have long underwear, be sure to wear it. '
	                    	+ 'Finally, wear at least five layers, with a waterproof winter jacket. Good luck out there!';
                	}
                }
                //Less than feels like of -20
                if (userFeelsLike < -20) {
                    return 'It\'s going to be miserably cold, avoid going outside if possible. Wear several layers, with undergarments made of wool. '
                    	+ 'Wear two layers of socks or more and insulated boots. If you have long underwear, be sure to wear it. '
                    	+ 'Finally, wear at least six layers, with a winter jacket. Do NOT leave any exposed skin, as frostbite can set in in these conditions in only 10 minutes. Good luck out there!';
                	}
                //Less than feels like of less than 0, but greater than -20
                if (userFeelsLike < 0 && userFeelsLike >= -20) {
                    return 'It\'s going to be cold, but it could be worse (At least it\'s not the Arctic!). '
                    	+ 'Wear wool undergarments if you have them (especially socks). Wear at least five layers (undershirt, shirt/blouse, sweater, insulating shell, outer coat). '
                    	+ 'Finally, at least wear a hat, as most of your body heat is lost through your head.';
                }
                //Less than feels like of 15, but greater than 0
                if (userFeelsLike < 15 && userFeelsLike >= 0) {
                    return 'It\'s going to be cold. '
                    	+ 'Wear several layers, and don\'t go out without cold weather accessories (hat, scarf, and gloves). '
                    	+ 'Wear boots and wool undergarments. Put on at least four layers, including a winter jacket.';
                }
                //Less than feels like of 32, but greater than 15
                if (userFeelsLike < 32 && userFeelsLike >= 15) {
                    return 'It\'s going to feel like it\'s below freezing, but you\'re tough! '
                    	+ 'Wear several layers, and don\'t go out without cold weather accessories (hat, scarf, and gloves). '
                    	+ 'Wear warm insulating boots, you don\'t want to get cold feet (now nor on your wedding day!). Put on at least four layers, including a winter jacket.';
                }
                //Less than feels like of 40, but greater than 32
                if (userFeelsLike < 40 && userFeelsLike >= 32) {
                    return 'It\'s gonna be a scorcher out there (not really). It won\'t be too cold, but that doesn\'t mean it\'s bikini time though '
                    	+ 'Wear at least three layers, four if you have two thin insulating shells. '
                    	+ 'Wear closed toed shoes, but it won\'t be too bad in heels if you have to.';
                }
                //Less than feels like of 55, but greater than 40
                if (userFeelsLike < 40 && userFeelsLike >= 32) {
                    return 'It\'s gonna be a great day out there. You\'ll only need three layers, with the outer jacket being a thin sportcoat, no need for a full fledged winter jacket.';
                }
                else{
                	return 'Damn son, it\'s gonna be cloudy... I think...'
                }

            }
		}
	}]);