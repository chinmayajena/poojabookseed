'use strict';

angular.module('myApp.success', ['ngRoute', 'ui.bootstrap'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/success', {
      templateUrl: 'success/success.html',
      controller: 'SuccessCtrl'
    });
  }])

  .controller('SuccessCtrl', [function() {

  }]);