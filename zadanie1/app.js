
const express = require('express');
const app = express();

const PORT = 3000;

const { renderPage: renderHomePage } = require('./views/home');
const { renderPage: renderStudentPage } = require('./views/student');

app.get('/', (req, res) => {
    res.send(renderHomePage());
});

app.get('/student', (req, res) => {
    res.send(renderStudentPage());
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
