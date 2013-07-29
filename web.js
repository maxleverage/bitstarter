var express = require('express');
var fs = require('fs');
var app = express(express.logger());

app.get('/', function(request, response) {
	var data = fs.readFileSync('index.html');
	var buf = new Buffer(data, 'utf-8');
	response.send(buf.toString());
});

app.use("/images", express.static(__dirname + "/images"));

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log("Listening on " + port);
});


