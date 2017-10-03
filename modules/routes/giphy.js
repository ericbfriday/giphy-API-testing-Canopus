var express = require('express');
var router = require('express').Router();
// var path = require('path');
// var mongoose = require('mongoose');
var bodyParser = require( 'body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

module.exports = router;