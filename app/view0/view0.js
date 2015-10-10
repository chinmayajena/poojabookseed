'use strict';

angular.module('myApp.view0', ['ngRoute', 'ui.bootstrap', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view0', {
    templateUrl: 'view0/view0.html',
    controller: 'View0Ctrl'
  });
}])

.controller('View0Ctrl', function($scope, $http) {

      $scope.isOpenPoojariList = false;
      $scope.openList = function (criteria) {
          $scope.isOpenPoojariList = true;
      };


        $scope.getLocation = function(val) {
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