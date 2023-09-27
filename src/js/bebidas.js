function calcularBebida({
    quantidadeConvidados,
    quantidadePessoasBebemCerveja,
    valorRefri,
    valorCerveja,
}) {
    let quantidadeBebida = quantidade(
        quantidadeConvidados,
        quantidadePessoasBebemCerveja
    );
    let valorBebida = valor(quantidadeBebida, valorRefri, valorCerveja);
    return {
        quantidades: {
            ...quantidadeBebida,
        },
        valores: {
            ...valorBebida,
        },
        total: total(valorBebida),
    };
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

    return { refri, cerveja };
}

function total(valores) {
    let valor = valores.refri + valores.cerveja;

    return { valor };
}

export { calcularBebida };
