function areaCirculo (){

}

function potencia (base:number, expoente:number = 2) : number {
    let resultado = 1;
    for (let cont = 0; cont < expoente; cont++){
        resultado *= base;
    }
    return resultado;
}

function buildName (firstName: string, ...restOfName: string[]) {
    return firstName + " " restOfName.join(" ");
}

console.log(buildName('a', 'b', 'c', 'd'));