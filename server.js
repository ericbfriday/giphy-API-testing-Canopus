var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser');
var port = process.env.PORT || 8080;

app.use( express.static( 'public' ) );
// app.use( '/', index );

// spin up server
app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end spin up