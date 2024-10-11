const express = require('express');
const app = express();
const estoque = require('./util/estoque');

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    const produto = estoque.adicionarProduto(id, nome, qtd);
    res.send(`Produto adicionado: ${JSON.stringify(produto)}`);
});

app.get('/listar', (req, res) => {
    const produtos = estoque.listarProdutos();
    res.json(produtos);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    const produtoRemovido = estoque.removerProduto(id);
    if (produtoRemovido) {
        res.send(`Produto removido: ${JSON.stringify(produtoRemovido)}`);
    } else {
        res.send('Produto não encontrado');
    }
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const produtoEditado = estoque.editarProduto(id, qtd);
    if (produtoEditado) {
        res.send(`Produto atualizado: ${JSON.stringify(produtoEditado)}`);
    } else {
        res.send('Produto não encontrado');
    }
});

const port = 8080;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});