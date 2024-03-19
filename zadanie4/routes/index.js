const fs = require('fs');
const { renderPage: renderHomePage } = require('../views/home');
const { renderPage: renderStudentPage } = require('../views/student');

function handleHome(req, res) {
    res.send(renderHomePage());
}

function handleStudent(req, res) {
    const { code, name, lastname, gender, age, studyField } = req.body;

    const studentData = `
        Numer albumu: ${code}
        Imię: ${name}
        Nazwisko: ${lastname}
        Płeć: ${gender}
        Wiek: ${age}
        Kierunek: ${studyField}
    `;


    fs.writeFile(`./${code}.txt`, studentData, (err) => {
        if (err) throw err;
        console.log('Dane studenta zostały zapisane do pliku.');
    });

    
    res.send(renderStudentPage(req.body));
}

module.exports = {
    handleHome,
    handleStudent
};