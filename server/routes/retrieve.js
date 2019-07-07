var express = require('express');
var router = express.Router();
var _ = require('underscore');
var mysql = require('mysql');

router.get('/retrieve', function (req, res, next) {
    res.locals.connection.query('select * from users', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;
