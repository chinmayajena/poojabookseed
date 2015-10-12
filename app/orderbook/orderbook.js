'use strict';

angular.module('myApp.order', ['ngRoute', 'ui.bootstrap', 'ngMessages',  'ngAnimate'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/order/:pujari?', {
            templateUrl: 'orderbook/order.html',
            controller: 'OrderCtrl'
        });
    }])

    .controller('OrderCtrl', function($scope, $routeParams, geolocService) {

        $scope.pujariMobile = $routeParams.pujari;
        $scope.getCustomerCity = function(val) {
            return geolocService.getLocation(val);
        }

        $scope.order = {

            pooja : [{id:2123, name: 'Satya Narayan Vrata', isRequired: false},
                      {id: 2323, name: 'Maha Laxmi Pooja', isRequired: false},
                {id: 0, name: 'Other', isRequired: false}]

        };


    });