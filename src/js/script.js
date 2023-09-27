import { calcularBebida } from "./bebidas.js";
import { obterFormulario } from "./dom.js";

const informacoesDeEntrada = obterFormulario();

function bebida(){
    let valores = {
        quantidadeConvidados: informacoesDeEntrada.convidados.value,
        quantidadePessoasBebemCerveja: informacoesDeEntrada.quantidadePessoasBebemCerveja.value,
        valorRefri: informacoesDeEntrada.refri.value,
        valorCerveja: informacoesDeEntrada.cerveja.value
    }
    console.log(calcularBebida(valores))
}


informacoesDeEntrada.addEventListener('submit', (event)=> {
    event.preventDefault();
    bebida();
})
