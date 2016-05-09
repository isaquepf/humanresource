app.factory('TeamService', ['$resource', function($resource) {
    return $resource('/teams/:teamId');
}]);