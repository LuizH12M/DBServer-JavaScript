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
// --------------------------------------------------------------------------
// Exercício 2:
class Moeda {
    constructor (private valor : number, private nome : string) {}

    getValor() : number
    { return this.valor; }
    
    getNome() : string
    { return this.nome; }

    moeda(v : number, n : string)
    { return `O nome da moeda é: ${this.getNome()} e tem o valor: ${this.getValor()}`}
}

class Cofrinho extends Moeda {
    constructor (valor : number, nome : string) {
        super (valor, nome);
    }

    /*
    cofrinho() {
        let moedas : number [] = [];
        for(let i = 0; i)
    }
    */
   
    



}

