function validacoes(informacoesDeEntrada) {
    let valorCerveja = informacoesDeEntrada.cerveja.value;
    let quantidadePessoasBebemCerveja =
        informacoesDeEntrada.quantidadePessoasBebemCerveja.value;

    if (
        verificarValorCerveja(valorCerveja, quantidadePessoasBebemCerveja) &&
        verificarValorPessoas(valorCerveja, quantidadePessoasBebemCerveja)
    ) {
        return true;
    }
    return false;
}

function verificarValorCerveja(valorCerveja, quantidadePessoasBebemCerveja) {
    if (quantidadePessoasBebemCerveja !== "" && valorCerveja === "") {
        alert("É necessário informar o valor da cerveja");
        return false;
    }
    return true;
}

function verificarValorPessoas(valorCerveja, quantidadePessoasBebemCerveja) {
    if (valorCerveja !== "" && quantidadePessoasBebemCerveja === "") {
        alert(
            "É necessário informar a quantidade de pessoas que beberão cerveja"
        );
        return false;
    }
    return true;
}

export { validacoes };
