app.controller('EmployeeCtrl', ['$scope', '$routeParams', 'EmployeeService',
    'TeamService', '$q', 'config', '$route',
    function($scope, $routeParams, employee, team, $q, config, $route) {

        $scope.address = {};

        function getTeam(teams, teamId) {
            teams.filter(function(team) {
                return team._id === teamId;
            })
        };

        $q.all([employee.get({
            employeeId: $routeParams.employeeId,
        }).$promise, team.query().$promise]).then(function(values) {
            $scope.teams = values[1];
            $scope.employee = values[0];
            $scope.employee.team = getTeam($scope.teams, $scope.employee.team._id);
        }).catch(_handleError);

        $scope.states = config.states.slice(0);

        $scope.edit = function() {
            $scope.editing = !$scope.editing;
        };

        $scope.save = function() {
            var lines = $scope.employee.address.lines;

            if (lines) {
                lines = lines.filter(function(line) {
                    return line;
                })
            }

            $scope.employee.address.lines = lines;

            employee.update({
                employeeId: $routeParams.employeeId
            }, $scope.employee, function() {
                $scope.editing = !$scope.editing;
            });
        };

        $scope.cancel = function() {
            $route.reload();
        };

        $scope.address.addLine = function(index) {
            var lines = $scope.employee.address.lines;
            lines.splice(index + 1, 0, '');
        };

        $scope.address.removeLine = function(index) {
            var lines = $scope.employee.address.lines;
            lines.splice(index, 1);
        };
    }
]);