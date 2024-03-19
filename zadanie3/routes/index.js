const express = require('express');
const router = express.Router();
const { renderPage: renderHomePage } = require('../views/home');
const { renderPage: renderStudentPage } = require('../views/student');

router.get('/', (req, res) => {
    res.send(renderHomePage());
});

router.get('/student', (req, res) => {
    res.send(renderStudentPage());
});

router.post('/student', (req, res) => {
    res.redirect('/');
});

module.exports = router;