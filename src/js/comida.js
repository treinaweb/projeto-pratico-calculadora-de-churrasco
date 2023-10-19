import { stringParaFloat } from "./helpers.js";

let multiplicadorBovina = 0.2;
let multiplicadorFrango = 0.1;
let multiplicadorSuina = 0.1;

function calcularComida({
    quantidadeConvidados,
    valorBovina,
    valorFrango,
    valorSuina,
}) {
    let quantidadesComida = quantidade(
        quantidadeConvidados,
        valorFrango,
        valorSuina
    );
    let valoresComida = valor(
        quantidadesComida,
        valorBovina,
        valorFrango,
        valorSuina
    );
    return {
        quantidades: {
            ...quantidadesComida,
        },
        valores: {
            ...valoresComida,
        },
        totais: {
            ...total(quantidadesComida, valoresComida),
        },
    };
}

function calcularMultiplicador(valorFrango, valorSuina) {
    if (valorFrango === "" && valorSuina === "") {
        multiplicadorBovina = 0.4;
        multiplicadorSuina = 0;
        multiplicadorFrango = 0;
        return;
    }

    if (valorFrango === "") {
        multiplicadorBovina = 0.25;
        multiplicadorSuina = 0.15;
        multiplicadorFrango = 0;
        return;
    }

    if (valorSuina === "") {
        multiplicadorBovina = 0.25;
        multiplicadorSuina = 0;
        multiplicadorFrango = 0.15;
        return;
    }
}

function quantidade(convidados, valorFrango, valorSuina) {
    calcularMultiplicador(valorFrango, valorSuina);
    let bovina, frango, suina;

    bovina = convidados * multiplicadorBovina;
    frango = convidados * multiplicadorFrango;
    suina = convidados * multiplicadorSuina;

    return { bovina, frango, suina };
}

function valor(quantidadesComida, valorBovina, valorFrango, valorSuina) {
    let bovina, frango, suina;

    bovina = quantidadesComida.bovina * stringParaFloat(valorBovina);
    frango = quantidadesComida.frango * stringParaFloat(valorFrango);
    suina = quantidadesComida.suina * stringParaFloat(valorSuina);

    return { bovina, frango, suina };
}

function total(quantidadesComida, valoresComida) {
    let valor =
        valoresComida.bovina + valoresComida.frango + valoresComida.suina;

    let quantidadeTotal =
        quantidadesComida.bovina +
        quantidadesComida.frango +
        quantidadesComida.suina;

    return { valor, quantidadeTotal };
}

export { calcularComida };
