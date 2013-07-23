var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var file_default = "index.html";
file = file || file_default;
var buffer = new Buffer(fs.readFileSync(file));

app.get('/', function(request, response) {
	response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});


