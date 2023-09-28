let multiplicadorBovina = .2;
let multiplicadorFrango = .1;
let multiplicadorSuina = .1;

function calcularComida({quantidadeConvidados}){
    let quantidadeComida = quantidade(quantidadeConvidados);
    return quantidadeComida
}

function quantidade(convidados){
    let bovina, frango, suina;

    bovina = convidados * multiplicadorBovina;
    frango = convidados * multiplicadorFrango;
    suina = convidados * multiplicadorSuina;

    return { bovina, frango, suina }
}

function valor(){}

function total(){}


export { calcularComida }