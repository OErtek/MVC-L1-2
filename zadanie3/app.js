const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

const { renderPage: renderHomePage } = require('./views/home');
const { renderPage: renderStudentPage } = require('./views/student');
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);


app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});