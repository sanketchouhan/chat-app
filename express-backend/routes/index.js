var express = require('express');
var router = express.Router();

module.exports = function(io){

    router.get('/', function(req, res, next) {
        res.render('index', {test:'this is index ejs'});
    });

    return router;
};