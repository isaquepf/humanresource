var mongoose = require("mongoose");

module.exports = function(connectionString) {

    mongoose.connect(connectionString);

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log('Mongoose default connection disconnected.');
            process.exit(0);
        });
    });
}
