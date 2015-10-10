'use strict';

angular.module('myApp.view0', ['ngRoute', 'ui.bootstrap', 'ngAnimate', 'duParallax'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view0', {
    templateUrl: 'view0/view0.html',
    controller: 'View0Ctrl'
  });
}])

.controller('View0Ctrl', function($scope) {

      $scope.isOpenPoojariList = false;
      $scope.openList = function (criteria) {
          $scope.isOpenPoojariList = true;
      };


})
.directive('googleplace', [ function() {
    return {
        require: 'ngModel',
        scope: {
            ngModel: '=',
            details: '=?'
        },
        link: function(scope, element, attrs, model) {
            var options = {
                types: ['(cities)'],
                componentRestrictions: {}
            };

            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                var geoComponents = scope.gPlace.getPlace();
                var latitude = geoComponents.geometry.location.A;
                var longitude = geoComponents.geometry.location.F
                var addressComponents = geoComponents.address_components;

                addressComponents = addressComponents.filter(function(component){
                    switch (component.types[0]) {
                        case "locality": // city
                            return true;
                        case "administrative_area_level_1": // state
                            return true;
                        case "country": // country
                            return true;
                        default:
                            return false;
                    }
                }).map(function(obj) {
                    return obj.long_name;
                });

                addressComponents.push(latitude, longitude);

                scope.$apply(function() {
                    scope.details = addressComponents; // array containing each location component
                    model.$setViewValue(element.val());
                });
            });
        }
    };
}]).animation('.slide', [function() {
        return {
            // make note that other events (like addClass/removeClass)
            // have different function input parameters
            enter: function(element, doneFn) {
                jQuery(element).fadeIn(1000, doneFn);

                // remember to call doneFn so that angular
                // knows that the animation has concluded
            },

            move: function(element, doneFn) {
                jQuery(element).fadeIn(1000, doneFn);
            },

            leave: function(element, doneFn) {
                jQuery(element).fadeOut(1000, doneFn);
            }
        }
    }]);