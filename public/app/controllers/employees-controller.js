app.controller('EmployeesCtrl', ['$scope', 'EmployeeService', function($scope, employeeService){
    
    employeeService.query(function(data, headers){
       $scope.employees = data; 
    }, _handleError);
}]);