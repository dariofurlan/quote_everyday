const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey  = fs.readFileSync('/etc/', 'utf8');
const certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

const credentials = {key: privateKey, cert: certificate};
const express = require('express');
const app = express();

// your express configuration here

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);