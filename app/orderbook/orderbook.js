'use strict';

angular.module('myApp.order', ['ngRoute', 'ui.bootstrap', 'ngMessages',  'ngAnimate', 'angularjs-dropdown-multiselect'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/order/:pujari?', {
            templateUrl: 'orderbook/order.html',
            controller: 'OrderCtrl'
        });
    }])

    .controller('OrderCtrl', function($scope, $routeParams, geolocService, $http, $location) {
        $scope.pujariMobile = $routeParams.pujari;
        $scope.getCustomerCity = function(val) {
            return geolocService.getLocation(val);
        }

        $scope.order = {



        };

    $scope.onBookBtnClick = function() {
      var path = "#/success";

    /*  {
        "poojaModel"
      :
        [{"id": 2123}, {"id": 2323}], "name"
      :
        "chinmaya", "mobile"
      :
        8920392039, "customerCity"
      :
        "Bengaluru, Karnataka, India", "add1"
      :
        "sls square", "desc"
      :
        "I want to get all the required itineraries for the pooja. Please get it if possible."
      }
      */


      $http.post("",$scope.order).success(
        function(response) {

          $location.path( path );
        }
      );

      $location.path( path );

      console.log(JSON.stringify($scope.order));
    }

    /*{id:2123, name: 'Satya Narayan Vrata', isRequired: false},
    {id: 2323, name: 'Maha Laxmi Pooja', isRequired: false},
    {id: 0, name: 'Other', isRequired: false}*/

      $scope.order.poojaModel = [];
      $scope.poojaData = [];
      $scope.poojaDataSettings = {
          displayProp: 'name',
          enableSearch: true
      };


    function initializePoojaData () {
      $http.get("http://192.168.0.3:8080/BookMyPandit/bookPooja.entry?uname=admin&password=BookAPooja2")
        .success(
        function(response) {
          $scope.poojaData =  response;
        });


      }

     initializePoojaData();


    });