app.controller('TeamCtrl', ['$scope', '$routeParams', 'TeamService', function($scope, $routeParams, teamService) {

    teamService.get({
        teamId: $routeParams.teamId
    }, function(data, headers) {
        $scope.team = data;
    }, _handleError);
}]);