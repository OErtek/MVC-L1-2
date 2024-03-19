const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', routes.handleHome);

app.get('/student', routes.handleStudent);

app.post('/student', routes.handleStudent);

// Obsługa nieistniejących ścieżek
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});