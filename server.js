var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.use(bodyParser.json());

app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/mongoose.js');
var routes = require('./server/config/routes.js');
routes(app);

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
});
app.listen(8000, function() {
    console.log("listening on port 8000");
})