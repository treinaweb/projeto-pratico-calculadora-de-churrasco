function obterElementoId(nomeCampo) {
    return document.getElementById(nomeCampo)
}

function inserirValores(elemento, valor){
    return obterElementoId(elemento).innerText = `${converterMoeda(valor)}`
}

function inserirQuantidades(elemento, valor, unidade = '') {
    obterElementoId(elemento).innerText = `${valor}${unidade}`
}

function converterMoeda(valor){
    const valorConvertido = new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    }).format(valor)
    return valorConvertido
}

export {inserirValores, inserirQuantidades}