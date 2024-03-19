function renderPage() {
    return `
        <html lang="pl">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Formularz studenta</title>
            </head>
            <body>
                <h2>Formularz studenta</h2>
                <form action="/submit" method="post">
                    <div>
                        <label for="studentFirstName">Imię:</label>
                        <input type="text" id="studentFirstName" name="name" required>
                    </div>
                    <div>
                        <label for="studentLastName">Nazwisko:</label>
                        <input type="text" id="studentLastName" name="lastname" required>
                    </div>
                    <div>
                        <label for="studentAge">Wiek:</label>
                        <input type="number" id="studentAge" name="age" required>
                    </div>
                    <div>
                        <label for="studentGender">Płeć:</label>
                        <select id="studentGender" name="gender" required>
                            <option value="male">Mężczyzna</option>
                            <option value="female">Kobieta</option>
                            <option value="other">Inna</option>
                        </select>
                    </div>
                    <div>
                        <label for="studentCode">Numer albumu:</label>
                        <input type="number" id="studentCode" name="code" required>
                    </div>
                    <div>
                        <label for="studentStudyField">Kierunek:</label>
                        <input type="text" id="studentStudyField" name="studyField" required>
                    </div>
                    <button type="submit">Wyślij</button>
                </form>
            </body>
        </html>
    `;
}

module.exports = { renderPage };
