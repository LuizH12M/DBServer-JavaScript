interface Desenhavel {
    x : number,
    y : Number
}

function desenhar (d : Desenhavel) {
    console.log(`x = ${d.x} y = ${d.y}`);
}

interface Predicado <T> {
    (item : T) : boolean;
}

function filtrar <T> (array : T[], filtro : Predicado <T>) : T[]{
    let resultado : T[] = [];
    for (let i = 0; i < array.length; i++) {
        if (filtro(array[i])) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}
console.log(filtrar([0,10,1,3,2], i => i % 2 === 0));