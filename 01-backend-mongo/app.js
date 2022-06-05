const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const logger = require('morgan');
const connectionDB = require('./database/connectionDB');


const app = express();
// Middlewares
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const postsRoute = require('./routes/postsRoutes');
app.use('/', postsRoute);

// HomePage route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
