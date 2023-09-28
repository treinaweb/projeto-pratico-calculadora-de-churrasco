import { calcularBebida } from "./bebidas.js";
import { calcularComida } from "./comida.js";
import { obterFormulario, mostrarBebida } from "./dom.js";

const informacoesDeEntrada = obterFormulario();

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

function comida(){
    let valores = {
        quantidadeConvidados: informacoesDeEntrada.convidados.value
    }
    console.log(calcularComida(valores))
}

informacoesDeEntrada.addEventListener("submit", (event) => {
    event.preventDefault();
    bebida();
    comida();
});
