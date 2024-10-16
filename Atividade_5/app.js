const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index', { error: null });
});

app.post('/dados', (req, res) => {
    const { nome, endereco, telefone, data } = req.body;

    if (!nome || !endereco || !telefone || !data) {
        return res.render('index', { error: 'Todos os campos devem ser preenchidos.' });
    }

    res.render('dados', { nome, endereco, telefone, data });
});

const port = 8080;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
