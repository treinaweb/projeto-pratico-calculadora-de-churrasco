function obterElementoId(nomeCampo) {
    return document.getElementById(nomeCampo)
}

function inserirValores(elemento, valor){
    return obterElementoId(elemento).innerText = `${valor}`
}

function inserirQuantidades(elemento, valor, unidade = '') {
    obterElementoId(elemento).innerText = `${valor}${unidade}`
}

export {inserirValores, inserirQuantidades}