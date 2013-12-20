'use strict';

// just adding this to the main module for simplicity right now.
angular.module('weatherbyApp')
  .factory('mockedApi', function(mockedData){
    // this factory returns an object with functions on it
    return{
      success: function(){
        return mockedData;
      }
    }

  })

  .factory('mockedData', function(){
    // this factory returns an object with functions on it
    return {
  "response": {
  "version":"0.1",
  "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
  "features": {
  "forecast": 1
  }
  }
    ,
  "forecast":{
    "txt_forecast": {
    "date":"10:00 AM EST",
    "forecastday": [
    {
    "period":0,
    "icon":"mostlycloudy",
    "icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
    "title":"Friday",
    "fcttext":"Mostly cloudy. High of 57F. Winds from the SSW at 5 to 15 mph.",
    "fcttext_metric":"Mostly cloudy. High of 14C. Breezy. Winds from the SSW at 10 to 20 km/h.",
    "pop":"10"
    }
    ,
    {
    "period":1,
    "icon":"mostlycloudy",
    "icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
    "title":"Friday Night",
    "fcttext":"Mostly cloudy in the evening, then overcast. Low of 46F. Winds from the SSW at 10 to 15 mph.",
    "fcttext_metric":"Mostly cloudy in the evening, then overcast. Low of 8C. Breezy. Winds from the SSW at 15 to 20 km/h.",
    "pop":"10"
    }
    ,
    {
    "period":2,
    "icon":"mostlycloudy",
    "icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
    "title":"Saturday",
    "fcttext":"Mostly cloudy in the morning, then overcast. High of 64F. Winds from the SSW at 10 to 15 mph.",
    "fcttext_metric":"Mostly cloudy in the morning, then overcast. High of 18C. Windy. Winds from the SSW at 15 to 25 km/h.",
    "pop":"10"
    }
    ,
    {
    "period":3,
    "icon":"cloudy",
    "icon_url":"http://icons-ak.wxug.com/i/c/k/cloudy.gif",
    "title":"Saturday Night",
    "fcttext":"Overcast. Low of 57F. Winds from the SSW at 10 to 15 mph.",
    "fcttext_metric":"Overcast. Low of 14C. Breezy. Winds from the SSW at 15 to 20 km/h.",
    "pop":"20"
    }
    ,
    {
    "period":4,
    "icon":"chancetstorms",
    "icon_url":"http://icons-ak.wxug.com/i/c/k/chancetstorms.gif",
    "title":"Sunday",
    "fcttext":"Overcast with a chance of rain, then a chance of a thunderstorm and rain showers in the afternoon. High of 72F. Winds from the SSW at 10 to 15 mph. Chance of rain 70%.",
    "fcttext_metric":"Overcast with a chance of rain, then a chance of a thunderstorm and rain showers in the afternoon. High of 22C. Breezy. Winds from the SSW at 15 to 25 km/h. Chance of rain 70%.",
    "pop":"70"
    }
    ,
    {
    "period":5,
    "icon":"chancerain",
    "icon_url":"http://icons-ak.wxug.com/i/c/k/chancerain.gif",
    "title":"Sunday Night",
    "fcttext":"Overcast with a chance of a thunderstorm and a chance of rain, then a chance of rain after midnight. Fog overnight. Low of 55F. Winds from the WSW at 5 to 15 mph. Chance of rain 40%.",
    "fcttext_metric":"Overcast with a chance of a thunderstorm and a chance of rain, then a chance of rain after midnight. Fog overnight. Low of 13C. Breezy. Winds from the WSW at 10 to 20 km/h. Chance of rain 40%.",
    "pop":"40"
    }
    ,
    {
    "period":6,
    "icon":"chancerain",
    "icon_url":"http://icons-ak.wxug.com/i/c/k/chancerain.gif",
    "title":"Monday",
    "fcttext":"Overcast with a chance of rain. High of 64F. Winds from the NNW at 5 to 15 mph. Chance of rain 40%.",
    "fcttext_metric":"Overcast with a chance of rain. High of 18C. Breezy. Winds from the NNW at 10 to 25 km/h. Chance of rain 40%.",
    "pop":"40"
    }
    ,
    {
    "period":7,
    "icon":"partlycloudy",
    "icon_url":"http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
    "title":"Monday Night",
    "fcttext":"Overcast in the evening, then partly cloudy. Low of 30F. Breezy. Winds from the NW at 10 to 20 mph.",
    "fcttext_metric":"Overcast in the evening, then partly cloudy. Low of -1C. Breezy. Winds from the NW at 20 to 25 km/h.",
    "pop":"0"
    }
    ]
    },
    "simpleforecast": {
    "forecastday": [
    {"date":{
  "epoch":"1387594800",
  "pretty":"10:00 PM EST on December 20, 2013",
  "day":20,
  "month":12,
  "year":2013,
  "yday":353,
  "hour":22,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"December",
  "monthname_short":"Dec",
  "weekday_short":"Fri",
  "weekday":"Friday",
  "ampm":"PM",
  "tz_short":"EST",
  "tz_long":"America/New_York"
},
    "period":1,
    "high": {
    "fahrenheit":"57",
    "celsius":"14"
    },
    "low": {
    "fahrenheit":"46",
    "celsius":"8"
    },
    "conditions":"Mostly Cloudy",
    "icon":"mostlycloudy",
    "icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
    "skyicon":"mostlycloudy",
    "pop":10,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0.0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0.0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0.0
    },
    "snow_allday": {
    "in": 0,
    "cm": 0
    },
    "snow_day": {
    "in": 0,
    "cm": 0
    },
    "snow_night": {
    "in": 0,
    "cm": 0
    },
    "maxwind": {
    "mph": 12,
    "kph": 19,
    "dir": "SSW",
    "degrees": 200
    },
    "avewind": {
    "mph": 10,
    "kph": 16,
    "dir": "SSW",
    "degrees": 200
    },
    "avehumidity": 68,
    "maxhumidity": 82,
    "minhumidity": 53
    }
    ,
    {"date":{
  "epoch":"1387681200",
  "pretty":"10:00 PM EST on December 21, 2013",
  "day":21,
  "month":12,
  "year":2013,
  "yday":354,
  "hour":22,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"December",
  "monthname_short":"Dec",
  "weekday_short":"Sat",
  "weekday":"Saturday",
  "ampm":"PM",
  "tz_short":"EST",
  "tz_long":"America/New_York"
},
    "period":2,
    "high": {
    "fahrenheit":"64",
    "celsius":"18"
    },
    "low": {
    "fahrenheit":"57",
    "celsius":"14"
    },
    "conditions":"Mostly Cloudy",
    "icon":"mostlycloudy",
    "icon_url":"http://icons-ak.wxug.com/i/c/k/mostlycloudy.gif",
    "skyicon":"cloudy",
    "pop":10,
    "qpf_allday": {
    "in": 0.00,
    "mm": 0.0
    },
    "qpf_day": {
    "in": 0.00,
    "mm": 0.0
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0.0
    },
    "snow_allday": {
    "in": 0,
    "cm": 0
    },
    "snow_day": {
    "in": 0,
    "cm": 0
    },
    "snow_night": {
    "in": 0,
    "cm": 0
    },
    "maxwind": {
    "mph": 15,
    "kph": 24,
    "dir": "SSW",
    "degrees": 200
    },
    "avewind": {
    "mph": 12,
    "kph": 19,
    "dir": "SSW",
    "degrees": 199
    },
    "avehumidity": 79,
    "maxhumidity": 83,
    "minhumidity": 55
    }
    ,
    {"date":{
  "epoch":"1387767600",
  "pretty":"10:00 PM EST on December 22, 2013",
  "day":22,
  "month":12,
  "year":2013,
  "yday":355,
  "hour":22,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"December",
  "monthname_short":"Dec",
  "weekday_short":"Sun",
  "weekday":"Sunday",
  "ampm":"PM",
  "tz_short":"EST",
  "tz_long":"America/New_York"
},
    "period":3,
    "high": {
    "fahrenheit":"72",
    "celsius":"22"
    },
    "low": {
    "fahrenheit":"55",
    "celsius":"13"
    },
    "conditions":"Chance of a Thunderstorm",
    "icon":"chancetstorms",
    "icon_url":"http://icons-ak.wxug.com/i/c/k/chancetstorms.gif",
    "skyicon":"cloudy",
    "pop":70,
    "qpf_allday": {
    "in": 0.20,
    "mm": 5.1
    },
    "qpf_day": {
    "in": 0.10,
    "mm": 2.5
    },
    "qpf_night": {
    "in": 0.16,
    "mm": 4.1
    },
    "snow_allday": {
    "in": 0,
    "cm": 0
    },
    "snow_day": {
    "in": 0,
    "cm": 0
    },
    "snow_night": {
    "in": 0,
    "cm": 0
    },
    "maxwind": {
    "mph": 13,
    "kph": 21,
    "dir": "SSW",
    "degrees": 199
    },
    "avewind": {
    "mph": 11,
    "kph": 18,
    "dir": "SSW",
    "degrees": 212
    },
    "avehumidity": 85,
    "maxhumidity": 100,
    "minhumidity": 59
    }
    ,
    {"date":{
  "epoch":"1387854000",
  "pretty":"10:00 PM EST on December 23, 2013",
  "day":23,
  "month":12,
  "year":2013,
  "yday":356,
  "hour":22,
  "min":"00",
  "sec":0,
  "isdst":"0",
  "monthname":"December",
  "monthname_short":"Dec",
  "weekday_short":"Mon",
  "weekday":"Monday",
  "ampm":"PM",
  "tz_short":"EST",
  "tz_long":"America/New_York"
},
    "period":4,
    "high": {
    "fahrenheit":"64",
    "celsius":"18"
    },
    "low": {
    "fahrenheit":"30",
    "celsius":"-1"
    },
    "conditions":"Chance of Rain",
    "icon":"chancerain",
    "icon_url":"http://icons-ak.wxug.com/i/c/k/chancerain.gif",
    "skyicon":"cloudy",
    "pop":40,
    "qpf_allday": {
    "in": 0.08,
    "mm": 2.0
    },
    "qpf_day": {
    "in": 0.02,
    "mm": 0.5
    },
    "qpf_night": {
    "in": 0.00,
    "mm": 0.0
    },
    "snow_allday": {
    "in": 0,
    "cm": 0
    },
    "snow_day": {
    "in": 0,
    "cm": 0
    },
    "snow_night": {
    "in": 0,
    "cm": 0
    },
    "maxwind": {
    "mph": 15,
    "kph": 24,
    "dir": "NW",
    "degrees": 309
    },
    "avewind": {
    "mph": 13,
    "kph": 21,
    "dir": "WNW",
    "degrees": 299
    },
    "avehumidity": 69,
    "maxhumidity": 100,
    "minhumidity": 62
    }
    ]
    }
  }
}

  });