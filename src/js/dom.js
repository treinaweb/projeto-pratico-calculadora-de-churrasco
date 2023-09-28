import { inserirValores, inserirQuantidades } from "./helpers.js";

function obterFormulario() {
    return document.forms.camposFormulario;
}

function mostrarBebida(bebida) {
    inserirValores("valor-refri", bebida.valores.refri);
    inserirValores("valor-cerveja", bebida.valores.cerveja);
    inserirValores("valor-total-bebida", bebida.total.valor);

    inserirQuantidades('qtd-refri', bebida.quantidades.refri.toFixed(0), 'Litros')
    inserirQuantidades('qtd-cerveja', bebida.quantidades.cerveja.toFixed(0), 'Latas(355ml)')
}

function mostrarComida(comida){
    inserirValores('valor-bovina', comida.valores.bovina);
    inserirValores('valor-frango', comida.valores.frango);
    inserirValores('valor-suina', comida.valores.suina);
    inserirValores('valor-total-comida', comida.totais.valor);

    inserirQuantidades('qtd-bovina', comida.quantidades.bovina.toFixed(3), 'g')
    inserirQuantidades('qtd-frango', comida.quantidades.frango.toFixed(3), 'g')
    inserirQuantidades('qtd-suina', comida.quantidades.suina.toFixed(3), 'g')
    inserirQuantidades('qtd-total-comida', comida.totais.quantidadeTotal.toFixed(3), 'g')
}

export { obterFormulario, mostrarBebida, mostrarComida };
