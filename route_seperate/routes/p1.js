module.exports = function(app){
    var express = require('express');
    var router_p1 = express.Router();

    router_p1.get('/r1', function(req, res){
        res.send('Hello /p1/r1');
    });
    router_p1.get('/r2', function(req, res){
        res.send('Hello /p1/r1');
    });
    app.get('/p3/r1', function(req, res){
        res.send('Hello /p3/r1');
    })
    return router_p1;
}