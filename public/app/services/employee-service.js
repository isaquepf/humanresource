app.factory('EmployeeService', ['$resource', function($resource) {
    return $resource('/employees/:employeeId', {}, {
        update: {
            method: 'Put'
        }
    });
}]);