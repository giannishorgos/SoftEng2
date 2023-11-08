const express = require('express');
require('dotenv').config();

// Routes
const expenese_route = require('./routes/expense.js');

const app = express();
const port = process.env.PORT;

app.use('/user/:userID/expense', expenese_route);

app.listen(port, () => {
    console.log('Server started on port: ' + port);
    console.log('URL: http://localhost:' + port);
});
