module.exports = function(app) {

    var controller = {};
    var Team = app.models.team;

    controller.getTeams = function(req, res) {
        Team.find().sort('name').exec(
            function(error, teams) {
                if (error) {
                    console.error(error);
                    res.status(500).json(error);
                }
                res.json(teams);
            })
    };


    controller.getTeamById = function(req, res) {
        Team.findOne({
            _id: req.params.teamId
        }, function(error, team) {
            if (error)
                console.error(error);
            res.status(500).json(error);

            if (!team)
                res.send(404);

            res.json(team);
        });
    };


    return controller;
}