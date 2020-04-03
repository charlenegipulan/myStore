var myApp = angular.module('myStore.templates',['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.
    when('/templates', {
        templateUrl: 'templates/templates.html',
        controller: 'TemplatesCtrl'
    }).
    when('/templates/:templateId', {
        templateUrl: 'templates/template-details.html',
        controller: 'TemplateDetailsCtrl'
    })
    $locationProvider.hashPrefix('');
}]);

myApp.controller('TemplatesCtrl', ['$scope', function($scope) {

}])

myApp.controller('TemplateDetailsCtrl', ['$scope', function($scope) {

}]);