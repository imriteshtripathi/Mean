var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'ButtonController',
        templateUrl: 'views/button.html'
    })

    $routeProvider.when('/button', {
        controller: 'ButtonController',
        templateUrl: 'views/button.html'
    })

    $routeProvider.when('/button/details/:id', {
        controller: 'ButtonController',
        templateUrl: 'views/button-details.html'
    })

    $routeProvider.when('/button/add', {
        controller: 'ButtonController',
        templateUrl: 'views/button-add.html'
    })

    $routeProvider.when('/button/edit/:id', {
        controller: 'ButtonController',
        templateUrl: 'views/button-edit.html'
    })
});
