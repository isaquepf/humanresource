'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource'])
    .constant('config', {
        states: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA']
    });

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/partials/home.html'
    }).when('/employees/', {
        templateUrl: 'partials/employees.html',
        controller: 'EmployeeCtrl'
    }).when('/employees/:employeeId', {
        templateUrl: 'partials/employee.html',
        controller: 'EmployeeCtrl'
    }).when('/teams', {
        templateUrl: 'partials/teams.html',
        controller: 'TeamsCtrl'
    }).when('/teams/:teamId', {
        templateUrl: 'partials/team.html',
        controller: 'TeamsCtrl'
    }).otherwise({
        redirectTo: '/'
    });
    
    function _handleError(response) {
        console.log('%c ' + response, 'color:red');
    }
}]);
