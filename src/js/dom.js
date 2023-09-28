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

function mostrarComida(comida){}

export { obterFormulario, mostrarBebida };
