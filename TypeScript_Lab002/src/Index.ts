// --> LISTA DE EXERCÍCIOS: LABORATÓRIO 2 - INTRODUÇÃO AO TYPESCRIPT
// Exercicio 01:
let minimo = 3;
let maximo = 9;
let arrayDePares : number [];
for (let i = minimo; i <= maximo; i++) {
    if (i % 2 === 0) {
        //console.log('Exercicio 1, versão 1: ' + i);
    }
}
// OU:
function pares (inicio : number, fim : number) : number [] {
    let arrayPares : number[] = [];
    for (let i = inicio; i <= fim; i++) { 
        if (i % 2 == 0){
            arrayPares.push(i);
        }
    }
    return arrayPares;
}
//console.log('Exercicio 1, versão 2: ' + pares(2,10));
// OU:
function paresWhile (inicio : number, fim : number) : number [] {
    let vetor : number [] = [];
    let i = inicio;
    while (i <= fim) {
        if (i % 2 == 0) {
            vetor.push(i);
        }
        i++;
    }
    return vetor;
}
//console.log('Exercicio 1, versão 3: ' + paresWhile(2,10));
// -------------------------------------------------------
// Exercício 02:
// RESPOSTA: O Loop será infinito, pois o JavaScript não tem precisão suficiente para realizar a soma.
// -------------------------------------------------------
// Exercício 03:
function min (x : number, y : number) : number {
    if (x > y)
        return y;
    else
        return x;
}
//console.log(min(2,9));
// -------------------------------------------------------
// Exercício 04:
function powIterativo (x : number, y : number) : number {
    if (y === 0) 
        return 1;
    let resultado = x;
    for (let i = y; i > 1; i--)
        resultado = resultado * x;
    return resultado;    
}
//console.log(powIterativo(4,5));

function powRecursivo (x : number, y : number) : number {
    if (y === 0) 
        return 1;
    return x * powRecursivo(x, y - 1);
}
//console.log('Exercicio 4, Recursivo: ' + powRecursivo(4,5));
// -------------------------------------------------------
// Exercício 05:
function toMaiusculaPrimeira(palavra: string) : string {
    return palavra.charAt(0).toUpperCase() + palavra.substring(1, palavra.length);
    // OU:
    // return palavra.replace(palavra.charAt(0), palavra.charAt(0).toLocaleUpperCase()); 
    // REPLACE: (o que sera trocado, o que tu quer trocar)
}
//console.log(toMaiusculaPrimeira('luiz'));
// -------------------------------------------------------
// Exercício 06:
function getMax (array: number[]) : number {
    let maior = array[0];
    for (let valor of array) {
        if (valor > maior) {
            maior = valor;
        }
    }
    return maior;
}
//console.log(getMax([1,2,3,4,2,0]));
//console.log(getMax([0]));
//console.log(getMax([]));
//console.log(getMax([null]));
//console.log(getMax([undefined]));
// ---------------------------------------------------------
// Exercício 07:
function frequencia (array : number[]) : Map<number, number> { 
    let contagem = new Map<number, number>();
    for (let valor of array) {
        if (contagem.has(valor)) {
            //contagem.set(valor, (contagem.get(valor) || 0) + 1); // ou logico: irá avaliar o 1°, e se ele for falso irá para o 2° / ou lógico: avalia a 1° expressão, se for Falsa, retorna a 2°
            contagem.set(valor, contagem.get(valor) !+ 1); // o '!' remove o tipo "null" e "undefined" do TIPO
        } else {
            contagem.set(valor, 1);
        }
    }
    return contagem;
}
//console.log(frequencia([1,2,1,0,4,2]));
//console.log(frequencia([]));
//console.log(3 || 0); // irá retornar 3, pois ele eh True
//console.log (undefined || 0); // os dois são False, mas irá retornar '0' pq é o 2° operador
// OU:
function frequenciaV2 (array : number[]) : Map<number,number> {
    return array.reduce((contagem, valor) => contagem.set(valor, (contagem.get(valor) || 0) + 1), new Map<number, number>()); 
    // REDUCE: (objeto_acumulador, elemento_atual)
}
//console.log(frequenciaV2([1,2,3,421,31]));