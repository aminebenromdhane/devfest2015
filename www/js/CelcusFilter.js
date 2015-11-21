angular.module('weather').filter('celcus', function () {
  return function(input) {
    return parseInt(input - 273);
  };
});
