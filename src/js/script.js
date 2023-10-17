import { calcularBebida } from "./bebidas.js";
import { calcularComida } from "./comida.js";
import { obterFormulario, mostrarBebida, mostrarComida } from "./dom.js";
import { formatarMoeda } from "./mascara.js";

const informacoesDeEntrada = obterFormulario();

formatarMoeda(informacoesDeEntrada);

function bebida() {
    let valores = {
        quantidadeConvidados: informacoesDeEntrada.convidados.value,
        quantidadePessoasBebemCerveja:
            informacoesDeEntrada.quantidadePessoasBebemCerveja.value,
        valorRefri: informacoesDeEntrada.refri.value,
        valorCerveja: informacoesDeEntrada.cerveja.value,
    };
    let valoresBebidaCalculado = calcularBebida(valores);
    mostrarBebida(valoresBebidaCalculado);
}

function comida() {
    let valores = {
        quantidadeConvidados: informacoesDeEntrada.convidados.value,
        valorBovina: informacoesDeEntrada.bovina.value,
        valorFrango: informacoesDeEntrada.frango.value,
        valorSuina: informacoesDeEntrada.suina.value,
    };
    let valoresComidaCalculado = calcularComida(valores);
    mostrarComida(valoresComidaCalculado);
}

informacoesDeEntrada.addEventListener("submit", (event) => {
    event.preventDefault();
    bebida();
    comida();
});
