import { calcularBebida } from "./bebidas.js";
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

informacoesDeEntrada.addEventListener("submit", (event) => {
    event.preventDefault();
    bebida();
});
