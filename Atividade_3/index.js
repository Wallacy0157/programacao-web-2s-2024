const express = require('express');
const calc = require('./util/calculadora');
const app = express();

app.get('/', (req, res)=>{
    res.send("Se nao apareceu a calculadora eu fiz merda!");
});

app.get('/somar/:n1/:n2', (req, res)=>{
    let a = req.params.n1;
    let b = req.params.n2;
    let c = calc.somar(a, b);
    res.send(`${a} + ${b} = ${c}`);
});

app.get('/subtrair/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    let c = calc.subtrair(a, b);
    res.send(`${a} - ${b} = ${c}`);
});

app.get('/multiplicar/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    let c = calc.multiplicar(a, b);
    res.send(`${a} * ${b} = ${c}`);
});

app.get('/dividir/:a/:b', (req, res)=>{
    let a = req.params.a;
    let b = req.params.b;
    let c = calc.dividir(a, b);
    res.send(`${a} / ${b} = ${c}`);
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app executando na porta ' + PORT);
}); 