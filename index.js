// VARIAVEIS

/*
var A1 = 'Prisma'
var A1 = 'Corola'

console.log(A1)
*/

// CONDICIONAIS

/*
var dinheiro = 70
console.log(`eu tengo R$${dinheiro}.00`)

if (dinheiro > 50){
    console.log('comprei memo doido')
} else {
    console.log('num tateno')
}
*/

// CONDICIONAIS 2

/*
var selecao = 'Brasil'

if (selecao == 'Brasil' || selecao == 'Argentina' || selecao == 'Uruguai'){
    console.log(`${selecao} ja ganho doido`)
} else {
    console.log(`${selecao} nunca ganho essa parada`)
}
*/

//CONDICIONAIS 3

/*
var selecao = 'manadiocarolapombarolingope'

if (selecao == 'Brasil') {
    console.log(`${selecao} ja ganho 5 veis doido`)
} else if (selecao == 'Argentina' || selecao == 'Uruguai') {
    console.log(`${selecao} ganho 2 veis só troxa`)
} else {
    console.log(`ixii ${selecao} nunca ganho bb`)
}
*/

//REPETIÇÕES

//console.log('oi')
//console.log('oi')
//console.log('oi')
//console.log('oi')
//console.log('oi')
//console.log('oi')

/*
for (let x = 0; x <= 3; x++) {
    console.log('oi')
}
console.log('Você esqueceu que eu existo?')
*/

//REPETIÇÕES 2

/*
const bolsa = [
    'Notebook', 
    'Moletom',
    'Escova de dentes',
    'Celular',
    'Carteira',
    'Carregador',
    'Mouse'
]

for(let i = 0; i < bolsa.length; i++) {
    console.log(bolsa[i])
    if (bolsa[i] == 'Carteira') break
}
*/

// REPETIÇÕES 3

n = 0;
x = 0;

while (n < 3) {
    n++
    x = x + n
    console.log(x)
}