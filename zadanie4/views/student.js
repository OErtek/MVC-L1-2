function renderPage(data) {
    const { code, name, lastname, gender, age, studyField } = data;
    const content = `
        <html lang="pl">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Profil studenta</title>
            </head>
            <body>
                <h1>Profil studenta</h1>
                <p>Numer albumu: ${code}</p>
                <p>Imię: ${name}</p>
                <p>Nazwisko: ${lastname}</p>
                <p>Płeć: ${gender}</p>
                <p>Wiek: ${age}</p>
                <p>Kierunek: ${studyField}</p>
            </body>
        </html>
    `;
    return content;
}

module.exports = { renderPage };