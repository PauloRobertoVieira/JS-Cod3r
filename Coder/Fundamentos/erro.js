function tratarErroElancar(erro){
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase()+ '!!!')
    } catch(e){
        tratarErroElancar(e)
    } finally {
        console.log('Fim')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)