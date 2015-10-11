'use strict';

angular.module('myApp.view0', ['ngRoute', 'ui.bootstrap', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view0', {
    templateUrl: 'view0/view0.html',
    controller: 'View0Ctrl'
  });
}])

.controller('View0Ctrl', function($scope, geolocService) {

      $scope.isOpenPoojariList = false;
      $scope.openList = function (criteria) {
          $scope.isOpenPoojariList = true;
      };


        $scope.getSearchLocation = function(val) {
           return geolocService.getLocation(val);
        }


});