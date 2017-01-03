var express = require('express');
var app = express();

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));

// redirect all others to the index (HTML5 history)
app.all('/*', function(req, res) {
    res.sendFile(__dirname + '/public/SampleRoute.html');
});

app.listen(3000, function() {
    console.log('Express listening on port 3000.');
});