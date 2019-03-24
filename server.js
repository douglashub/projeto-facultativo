const express = require('express'),
  bodyParser = require('body-parser'),
  http = require('http'),
  path = require('path'),
  app = express();

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist/hands-for-mental-health-app')));

// Send all requests to Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/hands-for-mental-health-app/index.html'));
});

// Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost: ${port}.`));

module.exports = app;
