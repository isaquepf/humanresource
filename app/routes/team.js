module.exports = function(app) {

    var controller = app.controllers.team;

    app.route('/teams')
        .get(controller.getTeams);

    app.route('/teams/:teamId')
        .get(controller.getTeamById);

};