function calcularBebida({
    quantidadeConvidados,
    quantidadePessoasBebemCerveja,
    valorRefri,
    valorCerveja
}) {
   let quantidadeBebida = quantidade(quantidadeConvidados, quantidadePessoasBebemCerveja)
   return valor(quantidadeBebida, valorRefri, valorCerveja)
}

function quantidade(quantidadeConvidados, quantidadePessoasBebemCerveja) {
    let refri, cerveja;

    refri = (quantidadeConvidados - quantidadePessoasBebemCerveja) * 1;

    cerveja = (quantidadePessoasBebemCerveja * 1.45) / 0.355;

    return { refri, cerveja };
}

function valor(quantidades, valorRefri, valorCerveja) {
    let refri, cerveja;

    refri = quantidades.refri * valorRefri;

    cerveja = quantidades.cerveja * valorCerveja;

    return { refri, cerveja }
}

function total() {}

export { calcularBebida };
