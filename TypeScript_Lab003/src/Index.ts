import { stringify } from "querystring";

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
//console.log(c1.areaCirculo());
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
//console.log(`Exercício 1, versão 2: ${c2}`);
//console.log(c2.areaCirculoV2());
//console.log(c2.comprimentoCirculoV2());
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
//console.log(fig1);
//console.log(fig1.area());
//console.log(fig1.x);
//console.log((<CirculoV3>fig1).raio_);
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

    setValor (v : number)
    { this._valor = v; }
}

class Cofrinho {
    private moedas: Moeda[] = [];

    adicionar(m: Moeda): void {
        this.moedas.push(m);
    }

    calcularTotal(): number {
        const somador: (x: number, y: Moeda) => number = (soma,moeda) => soma + moeda.valor;
        //                       tipo                                   função
        return this.moedas.reduce(somador, 0);
    }

    getMoeda() 
    { return this.moedas; }
// ------------------------------------------------------------------
// Exercício 3:
    menorValor() : number {
        let menor = this.getMoeda()[0].valor;
        for (let i = 1; i <= Moeda.length; i++) {
            let valorMoedaAtual = this.getMoeda()[i].valor;
            if (menor > valorMoedaAtual) {
                menor = valorMoedaAtual;
            }
        }
        return menor;
    }

    menorMoeda() : string {
        let a : number = 0;
        for(let i = 1; i <= Moeda.length; i++) {
            if(this.moedas[i].valor === cofre.menorValor()) {
                 a = i;
            }
        }
        return this.moedas[a].nome + ' ' + this.moedas[a].valor;
    }

    freqMoedas(): Map<number, number>{
        let mapa = new Map<number,number>();
        mapa.set(1, 0);
        mapa.set(5, 0);
        mapa.set(10, 0);
        mapa.set(25, 0);
        mapa.set(50, 0);
        mapa.set(100, 0);
        this.moedas.map((m) => mapa.set(m.valor, (mapa.get(m.valor)||0)+1));
        return mapa;
    }


}
let moeda1: Moeda = new Moeda(50, "50 centavos");
let moeda2: Moeda = new Moeda(25, "25 centavos");
let moeda3: Moeda = new Moeda(1, "1 centavo");
let cofre: Cofrinho = new Cofrinho();
cofre.adicionar(moeda1);
cofre.adicionar(moeda2);
cofre.adicionar(moeda3);
//console.log(cofre.calcularTotal());
//console.log('Menor valor: ' + cofre.menorValor());
//console.log('Menor moeda: ' + cofre.menorMoeda());
//console.log(cofre.freqMoedas());
// ----------------------------------------------------------
// Exercício 4:
abstract class Cliente {
    constructor (private nome:string) {}

    getNome():string
    { return this.nome; }

    abstract getMensalidade():number;
}

class ClienteFisico extends Cliente {
    constructor (nome:string, private idade:number, private salario:number) 
    { super (nome); }

    getIdade() : number
    { return this.idade; }

    setIdade(i:number) 
    { this.idade = i; }

    getSalario() : number 
    { return this.salario; }

    setSalario(s:number) 
    { this.salario = s; }

    getMensalidade() : number { 
        let a : number = 0;
        if(this.getIdade() < 60) 
            return this.salario * 0.1;
        else
            return this.salario * 0.15;
    }
}

class ClienteJuridico extends Cliente {
    constructor (nome:string, private mensalidade:number) 
    { super (nome); }

    setMensalidade(m:number)
    { this.mensalidade = m; }

    getMensalidade() 
    { return this.mensalidade; }
}



class CadastroClientes {
    private colecaoClientes : Cliente[] = [];

    adicionar(c : Cliente) : void 
    { this.colecaoClientes.push(c); }

    listagemClientes () : Map<string, number> {
        let mapa = new Map <string, number>();
        //this.colecaoClientes.map((m) => mapa.set(m.getNome, (mapa.getm.getMensalidade) || 0) + 1));
        this.colecaoClientes.map((m) => mapa.set(m.getNome(), (m.getMensalidade())));
        return mapa;
    }
}


let cliente1 : ClienteFisico = new ClienteFisico("Luiz", 19, 1100);
// console.log(cliente1);
// console.log(cliente1.getMensalidade());
let cliente2 : ClienteFisico = new ClienteFisico("Camillinha", 65, 4500);
// console.log(cliente2);
// console.log(cliente2.getIdade());
// console.log(cliente2.setIdade(35));
// console.log(cliente2.getMensalidade());
// console.log(cliente2);
let cadastrar : CadastroClientes = new CadastroClientes();
cadastrar.adicionar(cliente1);
cadastrar.adicionar(cliente2);
//console.log(cadastrar);
console.log(cadastrar.listagemClientes());

