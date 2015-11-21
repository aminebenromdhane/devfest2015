angular.module('weather')
  .controller('HomeController', function (weatherService) {
    var vm = this;
    this.weatherDays = [];
    weatherService
      .getWeather('sfax')
      .then(function(weatherDays){
        vm.weatherDays = weatherDays;
      });
  });
