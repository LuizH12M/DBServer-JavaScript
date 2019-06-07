// LABORATÓRIO 3: LISTA DE EXERCÍCIOS:
// Exercício 01:
class Circulo {
    x : number;
    y : number;
    raio : number;
    
    constructor(x : number, y : number, r : number){
        this.x = x;
        this.y = y;
        this.raio = r;
    }

    areaCirculo() : number {
        return Math.PI * Math.pow(this.raio, 2);
    }

    comprimentoCirculo() : number {
        return 2 * Math.PI * this.raio;
    }
}

let c1 = new Circulo (1,1,2);
console.log(c1.areaCirculo());
// OU:
class CirculoV2 {
    constructor (private x:number, private y:number, private raio:number) {}

    getX() : number
    { return this.x; }

    getY() : number
    { return this.y; }

    getRaio() : number
    { return this.raio; }

    areaCirculoV2() : number 
    { return Math.PI * Math.pow(this.getRaio(), 2)};

    comprimentoCirculoV2() : number
    { return 2 * Math.PI * this.getRaio()};
}

let c2 = new CirculoV2 (1,1,3.5);
console.log(`Exercício 1, versão 2: ${c2}`);
console.log(c2.areaCirculoV2());
console.log(c2.comprimentoCirculoV2());
// OU:
abstract class FiguraBidimensional {
    constructor (private centroX : number, private centroY : number) {}

    get x() : number 
    { return this.centroX; }

    get y() : number
    { return this.centroY; }


    abstract area() : number;
}

class CirculoV3 extends FiguraBidimensional {
    constructor (centroX : number, centroY : number, private raio : number) 
    { super (centroX, centroY); }
    
    area() 
    { return Math.PI * Math.pow(this.raio, 2)};

    get raio_ () 
    { return this.raio; }
}
let fig1 : FiguraBidimensional = new CirculoV3(1,1,3);
console.log(fig1);
console.log(fig1.area());
console.log(fig1.x);
console.log((<CirculoV3>fig1).raio_);
// --------------------------------------------------------------------------
//Exercício 2
class Moeda {
    constructor(private _valor: number, private _nome: string) {}

    get valor(): number {
        return this._valor;
    }

    get nome(): string {
        return this._nome;
    }
}

class Cofrinho {
    private moedas: Moeda[] = [];

    adicionar(m: Moeda): void {
        this.moedas.push(m);
    }

    calcularTotal(): number {
        const somador: (x: number, y: Moeda) => number = (soma,moeda) => soma + moeda.valor;
        return this.moedas.reduce(somador, 0);
    }
}
let moeda1: Moeda = new Moeda(50, "50 centavos");
let moeda2: Moeda = new Moeda(25, "25 centavos");
let cofre: Cofrinho = new Cofrinho();
cofre.adicionar(moeda1);
cofre.adicionar(moeda2);
console.log(cofre.calcularTotal());


