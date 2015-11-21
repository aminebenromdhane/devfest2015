angular.module('weather')
  .factory('weatherService',
  function($http, $q) {
    return {
      getWeather: function(cityName){
        var deferred = $q.defer();
        $http.get('http://api.openweathermap.org/data/2.5/forecast?q='+this.cityName+'&appid=2de143494c0b295cca9337e1e96b00e0')
          .then(function(result){
            deferred.resolve(result.data.list);
          });
        return deferred.promise;
      }
    };
  });
