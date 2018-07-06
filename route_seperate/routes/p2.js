module.exports = function(app){
    var express = require('express');
    var router_p2 = express.Router();
    router_p2.get('/r1', function(req, res){
        res.send('Hello /p1/r1');
    });
    router_p2.get('/r2', function(req, res){
        res.send('Hello /p1/r1');
    });
    return router_p2;
};