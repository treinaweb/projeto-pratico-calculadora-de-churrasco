let multiplicadorBovina = 0.2;
let multiplicadorFrango = 0.1;
let multiplicadorSuina = 0.1;

function calcularComida({
    quantidadeConvidados,
    valorBovina,
    valorFrango,
    valorSuina,
}) {
    let quantidadesComida = quantidade(quantidadeConvidados);
    let valoresComida = valor(quantidadesComida, valorBovina, valorFrango, valorSuina)
    return valoresComida;
}

function quantidade(convidados) {
    let bovina, frango, suina;

    bovina = convidados * multiplicadorBovina;
    frango = convidados * multiplicadorFrango;
    suina = convidados * multiplicadorSuina;

    return { bovina, frango, suina };
}

function valor(quantidadesComida, valorBovina, valorFrango, valorSuina) {
    let bovina, frango, suina;

    bovina = quantidadesComida.bovina * valorBovina;
    frango = quantidadesComida.frango * valorFrango;
    suina = quantidadesComida.suina * valorSuina;

    return { bovina, frango, suina };
}

function total() {}

export { calcularComida };
