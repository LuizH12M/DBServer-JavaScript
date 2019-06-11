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