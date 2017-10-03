var express = require('express');
var router = require('express').Router();
// var path = require('path');
// var mongoose = require('mongoose');
var bodyParser = require( 'body-parser');
var request = require('request');

require('dotenv').config();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

// var url = 'https://api.giphy.com/v1/gifs/search?api_key=HW5jgIncwNEWpawEIuBgYQIeB3bupvbo&q=&limit=25&offset=0&rating=G&lang=en';
// var options = {
//     url: url,
//     method: 'GET',
// };

router.get('/', function(req, res){
    console.log('Inside giphy.js router GET function!');
    console.log('logging GIPHY_KEY', process.env.GIPHY_KEY);
    request('https://api.giphy.com/v1/gifs/search?api_key=' + process.env.GIPHY_KEY + '&q=cute+kitten&limit=25&offset=0&rating=G&lang=en', function(error, response, body) {
        console.log('logging error', error);
        // console.log('logging response', response);
        console.log('logging body ', body);

        res.status(200).send(JSON.parse(body));
    });

    // res.sendStatus(200);
});


module.exports = router;