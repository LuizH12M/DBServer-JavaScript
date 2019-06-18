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

// TypeScript tem "tipos estruturais"
let umaPessoa : Pessoa = new Pessoa('John Doe', 22);
let outraPessoa : PessoaV2 = umaPessoa;
console.log(outraPessoa);

function imprime (p : {nome : string, idade : number}) : void { 
    // o objeto deve ter pelo menos os atibutos nome e idade, mas pode ter mais atributos. E nao deve ter atributos privados
    console.log(p.nome + ' ' + p.idade);
}

imprime(umaPessoa);
imprime(outraPessoa);

// -----------------------------------------------

class Produto {
    constructor (private _nome : string, private _preco : number) {}

    get nome() : string
    { return this._nome; }

    get preco()
    { return this._preco; }

    set preco(p : number)
    { this._preco = p; }

    toString() : string {
        return `[nome = ${this.nome}, preco = ${this.preco}]`;
    }
}

class ProdutoPerecivel extends Produto { 
    constructor (nome : string, preco : number, private _dataValidade : Date) { 
        super (nome, preco);
    }

    get dataValidade() : string 
    { return this._dataValidade.toLocaleDateString(); }

    toString() : string { // Sobreescrevendo o método 'toString' da Classe Produto
        return super.toString() + `[dataValidade = ${this._dataValidade}]`;
    }
}

let prod1 = new Produto('prod1', 1.99);
console.log(prod1);
let prod2 = new ProdutoPerecivel('prod2', 100, new Date(2019, 11, 31));
console.log(prod2);
console.log(prod2.toString());

//let prod3: Produto = {_nome = 'teste', _preco : 2.50}; não da pq os atributos da Classe Produto são Privados

// prod1 = prod2; pode
// prod2 = prod1; não pode
