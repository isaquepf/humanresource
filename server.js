var http = require("http");
var app = require("./config/express")();
require("./config/connection")('mongodb://localhost:27017/rh');

http.createServer(app).listen(process.env.PORT, process.env.IP, function() {
    console.log('Starting in port ' + process.env.PORT);
});