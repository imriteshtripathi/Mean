var myApp = angular.module('myApp');

myApp.controller('ButtonController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {

    //Get all buttons 
    $scope.getButtons = function() {
        $http.get('/api/button').success(function(response) {
            $scope.buttons = response;
        });
    }

    //Get button by Id
    $scope.getButton = function() {
        var id = $routeParams.id;
        $http.get('/api/button/' + id).success(function(response) {
            $scope.button = response;
        });
    }


    //Get Add New Button
    $scope.addButton = function() {
        console.log($scope.button);
        $http.post('/api/button/', $scope.button).success(function(response) {
            window.location.href = '#/button';
        })
    }

    //Updated Button
    $scope.updateButton = function() {
        var id = $routeParams.id;
        $http.put('/api/button/' + id, $scope.button).success(function(response) {
            window.location.href = '#/button';
        })
    }

    $scope.removeButton = function(id) {
        $http.delete('/api/button/' + id).success(function(response) {
            window.location.href = '#/button';
        })
    }

}]);
