// Validações de Alerta
function validacoes(informacoesDeEntrada) {
    let valorCerveja = informacoesDeEntrada.cerveja.value;
    let quantidadePessoasBebemCerveja =
        informacoesDeEntrada.quantidadePessoasBebemCerveja.value;

    if (
        verificarValorCerveja(valorCerveja, quantidadePessoasBebemCerveja) &&
        verificarValorPessoas(valorCerveja, quantidadePessoasBebemCerveja) &&
        verificarValoresNegativos(informacoesDeEntrada)
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

function verificarValoresNegativos(campos) {
    for (let i = 0; i < campos.length; i++) {
        if (campos[i].value !== "" && campos[i].value < 1) {
            alert(`O valor de ${campos[i].name} deve ser maior que 1`);
            return false;
        }
    }
    return true;
}

// Validações de Campos
function validacoesCampos(informacoesDeEntrada) {
    verificarNumeroDePessoasBebem(
        informacoesDeEntrada.quantidadePessoasBebemCerveja,
        informacoesDeEntrada.convidados
    );
}

function verificarNumeroDePessoasBebem(pessoasBebem, convidados) {
    pessoasBebem.addEventListener("input", () => {
        if (parseInt(pessoasBebem.value) > parseInt(convidados.value)) {
            pessoasBebem.setCustomValidity(
                "O número de pessoas que bebem precisa ser menor que a quantidade de convidados"
            );
            return;
        }
        pessoasBebem.setCustomValidity("");
    });
}

export { validacoes, validacoesCampos };
