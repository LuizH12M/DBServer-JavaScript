let palavras : string [] = ['a', 'b'];
console.log(palavras.pop());
console.log(palavras.pop());
console.log(palavras.pop()); // retorna undefined

// Variavel X é do tipo Number OU Undefined
let x : number | undefined;
x = 1;
x = undefined;

// Limitando o valor da variável num
let num : 12 | 7;
num = 12;
num = 7;
//num = 1;