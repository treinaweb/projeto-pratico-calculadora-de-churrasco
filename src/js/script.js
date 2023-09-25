import { obterFormulario } from "./dom.js";

const informacoesDeEntrada = obterFormulario();

function bebida(){}


informacoesDeEntrada.addEventListener('submit', (event)=> {
    event.preventDefault();
    bebida();
})