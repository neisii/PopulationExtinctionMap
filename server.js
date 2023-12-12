var express = require( 'express')
var app = express()
var cf_app = require( './app/vcap_application')
var cf_svc = require( './app/vcap_services')

// app.set( 'views', __dirname + '/views')
// app.set( 'view engine', 'jade')
// app.use( express.static( __dirname + '/public'))
app.use('/', express.static(__dirname + '/html'));
app.use('/data', express.static(__dirname + '/data'));
// app.use('/manage', express.static(__dirname + '/html/manage'));
app.use('/bootstrap', express.static(__dirname + "/node_modules/bootstrap/dist"));

app.get( '/', function ( req, res) {
  res.sendFile('/index.html')
})

app.listen( process.env.PORT || 5500)
