module.exports = function(app) {
    
    var controller = app.controllers.employee;
    
     app.get('/', function(req, res) {
        res.send('respond with a resource');
      });
    
    app.route('/employees')
       .get(controller.getEmployees);
       
    app.route('/employees/:employeeId')  
       .get(controller.getEmployeeById)
       .put(controller.updateEmployee)
};