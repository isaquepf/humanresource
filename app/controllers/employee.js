module.exports = function(app) {

    var controller = {};

    var Employee = app.models.Employee;

    controller.getEmployees = function(req, res) {
        Employee.find().sort('name last').exec()
            .then(function(employees) {
                res.json(employees);
            }, function(error) {
                console.error(error);
                res.status(500).json(error);
            });
    };

    controller.getEmployeeById = function(req, res) {
        Employee.findOne({
            id: req.params.employeeId
        }).populate('team').exec(function(error, employee) {
            if (error)
                console.error(error);
            res.status(500).json(error);

            if (!employee)
                res.send(404);

            res.json(employee);
        });
    };

    controller.updateEmployee = function(req, res) {
        delete req.body._id;
        req.body.team = req.body.team._id;

        Employee.update({
            id: req.params.employeeId
        }, req.body, function(error, numberAffected, response) {
            if (error) {
                console.error(error);
                res.status(500).json(error);
            }

            res.send(200);
        });
    };

    return controller;
}