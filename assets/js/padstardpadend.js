/*
    PadEnd: Usado para strings, uma das suas aplicabilidades
    é substituir uma string por qualquer outra string, recebendo
    alguns parâmetros. Exemplo:

let cpf = '53034045007';

let lastDigits = card.slice(0, 3);

let cardMask = lastDigits.padEnd(11, '*');

console.log(cardMask);

document.querySelector('.padstartpadend').innerHTML = 'Este é seu CPF? ' + cardMask;
*/

/*
    PadStart, exatamente a mesma coisa do padEnd, com uma diferença
    que o padStart pega as strings no começo. Exemplo:
*/
let card = '5303404500752679';

let lastDigits = card.slice(-4);

let cardMask = lastDigits.padStart(16, '*');

console.log(cardMask);

document.querySelector('.padstartpadend').innerHTML = 'Este é seu cartão de crédito? ' + cardMask;