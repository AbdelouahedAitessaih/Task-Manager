const express = require('express');
const createError = require('http-errors');
const app = express();

const routes = require('./routes');

//routes
routes(app);

//db
require('./database/mongoose');

app.use((req, res, next) => {
    const error = createError(404);
    next(error);
});

app.use((err, req, res, next) => {
    res.statusCode = err.statusCode;
    res.json({
        message: err.message
    });
});

app.listen(3000, ()=>console.log('Server started on port 3000'));