//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/explore-egypt'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/explore-egypt/index.html'));
});

// Start the app by listening on the default Heroku port//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/explore-egypt'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/explore-egypt/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
app.listen(process.env.PORT || 8080);