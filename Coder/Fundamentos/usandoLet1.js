//declarações usando let tem escopo global, escopo de função e escopo de bloco
var numero = 1

{
    let numero = 2
    console.log('dentro= ',numero)
}

console.log('fora =',numero)