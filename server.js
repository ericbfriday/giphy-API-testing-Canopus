var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser');
var port = process.env.PORT || 8080;
var giphy = require('./modules/routes/giphy');
var index = require('./modules/routes/index');

app.use( express.static( 'public' ) );
app.use( '/', index );
app.use('/giphy', giphy);

// spin up server
app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end spin up