class Pessoa {
    nome : string;
    idade : number;
    
    constructor(n : string, i : number) {
        this.nome = n;
        this.idade = i;
    }
}

let p1 : Pessoa;
p1  = new Pessoa ('John Doe', 22);
console.log(p1);
p1.idade = 30;
console.log(p1);


class PessoaV2 {
    readonly nome : string; // variável READONLY nao pode ser alterada, somente leitura
    readonly idade : number;

    constructor(n : string, i: number) {
        this.nome = n;
        this.idade = i;
    }
}

let p2 : PessoaV2;
p2 = new PessoaV2('John Doe', 22);
console.log(p2.idade);


class PessoaV3 {
    constructor(private nome : string, private _idade : number) {}

    getNome() : string // metodo
    { return this.nome; }

    get idade() : number  // atributo
    { return this._idade; }

    set idade(n:number) 
    { this._idade = n; }
}

let p3 = new PessoaV3 ('John Doe', 22);
console.log(p3);
//console.log(p3.nome); // não pode pq o atributo é PRIVATE