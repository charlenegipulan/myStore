'use strict';

// Declare app level module which depends on views, and core components
angular.module('myStore', [
  'ngRoute',
  'myStore.view1',
  'myStore.view2',
  'myStore.templates'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);

