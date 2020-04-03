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

myApp.controller('TemplatesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('json/templates.json').then(function(data){
        $scope.templates = data.data;
        console.log($scope.templates);
    });
}])

myApp.controller('TemplateDetailsCtrl', ['$scope', function($scope) {

}]);