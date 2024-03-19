const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

const { renderPage: renderHomePage } = require('./views/home');
const { renderPage: renderStudentPage } = require('./views/student');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(renderHomePage());
});

app.get('/student', (req, res) => {
    res.send(renderStudentPage());
});

app.post('/submit', (req, res) => {
    // Obsługa przesłanych danych z formularza
    console.log(req.body);
    res.send('Dane z formularza zostały przesłane pomyślnie.');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
