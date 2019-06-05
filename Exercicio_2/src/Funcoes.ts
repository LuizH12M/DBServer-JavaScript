function potencia (base:number, expoente:number = 2) : number {
    let resultado = 1;
    for (let cont = 0; cont < expoente; cont++){
        resultado *= base;
    }
    return resultado;
}

// Passagem de no minimo um parametro, mas posso receber infinitos
function buildName (firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
console.log(buildName('a', 'b', 'c', 'd'));

const somar = function (x:number, y:number) : number {
    return x + y;
}
console.log(somar(1,2));

// Função Lambda:
const mult = (x:number, y:number) => x * y;
console.log(mult(2,3));

//                                    parametros    retorno
function multiplicar (fator:number) : (n:number) => number{
    return (numero => numero * fator);
}
console.log(multiplicar(3));

