var async = require("async");
var mongoose = require("mongoose");
require('../lib/connection');
var Employee = mongoose.model('Employee');
var Team = mongoose.model('Team');


var data = {
    employees: [{
        id: '1000003',
        name: {
            first: 'Colin',
            last: 'Ihrig'
        },
        image: 'images/employee/100003.png',
        address: {
            lines: ['11 Wall Street'],
            city: 'New York',
            state: 'NY',
            zip: 10118
        }
    }, {
        id: '1000021',
        name: {
            first: 'Adam',
            last: 'Bretz'
        },
        address: {
            lines: ['46 18th st', 'St. 210'],
            city: 'Pittsburg',
            state: 'PA',
            zip: 15222
        }
    }, {
        id: '1000023',
        name: {
            first: 'Matt',
            last: 'Liegey'
        },
        address: {
            lines: ['2 S Market Square', '(Market Square)'],
            city: 'Pittsburg',
            state: 'PA',
            zip: 15222
        }
    }, {
        id: '1000025',
        name: {
            first: 'AlekSey',
            last: 'Smolenchuk'
        },
        image: 'images/employee/1000025',
        address: {
            lines: ['3803 Forbes Ave'],
            city: 'Pittsburg',
            state: 'PA',
            zip: 15213
        }
    }, {
        id: '1000030',
        name: {
            first: 'Sarah',
            last: 'Day'
        },
        address: {
            lines: ['8651 University Blvd'],
            city: 'Pittsburg',
            state: 'PA',
            zip: 15108
        }
    }, {
        id: '1000031',
        name: {
            first: 'Dave',
            last: 'Beshero'
        },
        address: {
            lines: ['1539 Washington Rd'],
            city: 'Mt Lebanon',
            state: 'PA',
            zip: 15228
        }
    }],
    teams: [{
        name: 'Software and Services Group'
    }, {
        name: 'Project Development'
    }, ]

};


var deleteEmployees = function(callback) {
    console.info('Deleting employees');
    Employee.remove({}, function(error) {
        if (error) {
            console.error('Error deleting employees: ' + error)
        }

        console.info('Done deleting employees.');
        callback();
    });
};

var addEmployees = function(callback) {
    console.info('Adding Employee');
    Employee.create(data.employees, function(error) {
        if (error) {
            console.error('Error: ' + error);
        }

        console.log('Done adding employees.');
        callback();
    });
};

var deleteTeams = function(callback) {
    console.info('Deleting teams.');
    Team.remove({}, function(error, response) {
        if (error) {
            console.error('Error: ' + error);
        }

        console.info('Done deleting teams.');
        callback();
    });
};

var addTeams = function(callback) {
    console.info('Adding teams');
    Team.create(data.teams, function(error, team1) {
        if (error) {
            console.error('Error: ' + error);
        }
        else {
            data.team_id = team1.id;
        }

        console.info('Done adding teams.');
        callback();
    });
};

var updateEmployeeTeams = function(callback) {
    console.info('Update employees teams');
    var team = data.teams[0];

    Employee.update({
        team: data.team_id
    }, {
        multi: true
    }, function(error, numberAffected, response) {
        if (error) {
            console.error('Error updating employee team: ' + error);
        }

        console.info('Done updating employee teams');
        callback();
    });
};

async.series([
    deleteEmployees,
    deleteTeams,
    addEmployees,
    addTeams,
    updateEmployeeTeams
], function(error, results) {

    if (error) {
        console.error('Error' + error);
    }

    mongoose.connection.close();
    console.log('Done!');
});