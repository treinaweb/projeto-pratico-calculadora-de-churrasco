function calcularBebida({
    quantidadeConvidados,
    quantidadePessoasBebemCerveja,
}) {
   
}

function quantidade(quantidadeConvidados, quantidadePessoasBebemCerveja) {
    let refri, cerveja;

    refri = (quantidadeConvidados - quantidadePessoasBebemCerveja) * 1;

    cerveja = (quantidadePessoasBebemCerveja * 1.45) / 0.355;

    return { refri, cerveja };
}

function valor() {}

function total() {}

export { calcularBebida };
