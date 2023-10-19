function obterElementoId(nomeCampo) {
    return document.getElementById(nomeCampo);
}

function inserirValores(elemento, valor) {
    if (isNaN(valor) || valor == 0) {
        return (obterElementoId(elemento).innerText = "--");
    }

    return (obterElementoId(elemento).innerText = `${converterMoeda(valor)}`);
}

function inserirQuantidades(elemento, valor, unidade = "") {
    if (valor == 0) {
        return (obterElementoId(elemento).innerText = "--");
    }
    return (obterElementoId(elemento).innerText = `${valor}${unidade}`);
}

function converterMoeda(valor) {
    const valorConvertido = new Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        style: "currency",
    }).format(valor);
    return valorConvertido;
}

function stringParaFloat(input) {
    let valorAlterado;

    valorAlterado = parseFloat(input.replace(",", "."));
    if (isNaN(valorAlterado)) {
        valorAlterado = 0;
    }
    return valorAlterado;
}

export { inserirValores, inserirQuantidades, stringParaFloat, obterElementoId };
