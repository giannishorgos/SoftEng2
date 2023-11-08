const express = require('express');
require('dotenv').config();

// Routes
const personalinfo_route = require('./routes/personalInfo.js');

const app = express();
const port = process.env.PORT;

app.use('/user/:userID?/personalinfo', personalinfo_route);

app.listen(port, () => {
    console.log('Server started on port: ' + port);
    console.log('URL: http://localhost:' + port);
});