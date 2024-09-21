let produtos = [];

function adicionarProduto(id, nome, qtd) {
    const produto = { id, nome, qtd: parseInt(qtd) };
    produtos.push(produto);
    return produto;
}

function listarProdutos() {
    return produtos;
}

function removerProduto(id) {
    const index = produtos.findIndex(prod => prod.id == id);
    if (index !== -1) {
        return produtos.splice(index, 1)[0];
    }
    return null;
}

function editarProduto(id, qtd) {
    const produto = produtos.find(prod => prod.id == id);
    if (produto) {
        produto.qtd = parseInt(qtd);
        return produto;
    }
    return null;
}

module.exports = {
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarProduto
};