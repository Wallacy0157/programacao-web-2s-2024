const lc = require('./letter_case/letter_case');
const express = requise('express');

const app = express();

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta' + PORT);
});