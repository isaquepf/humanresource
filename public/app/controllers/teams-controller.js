app.controller('TeamsCtrl', ['$scope', 'TeamService', function($scope, teamService) {
    teamService.query(function(teams) {
        $scope.teams = teams;
    }, _handleError);
}]);