var express = require('express');
var app = express();

var router_p1 = require('./routes/p1')(app);
app.use('/p1', router_p1);

var router_p2 = require('./routes/p2')(app);
app.use('/p2', router_p2);

app.listen(3003, function(){
    console.log('connected');
});