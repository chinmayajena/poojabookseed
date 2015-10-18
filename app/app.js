'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view0',
  'myApp.view1',
  'myApp.view2',
  'myApp.order',
  'myApp.success'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view0'});
}]);

angular.module('myApp').service('geolocService', function($http) {

  this.getLocation = function(val) {
    return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: val,
        sensor: false
      }
    }).then(function(response){
      return response.data.results.map(function(item){
        return item.formatted_address;
      });
    });
  };
});