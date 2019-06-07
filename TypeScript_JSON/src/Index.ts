class Pessoa {
    nome : string;
    idade : number;
    
    constructor(n : string, i : number) {
        this.nome = n;
        this.idade = i;
    }
}

let umaPessoa = new Pessoa ('John Doe', 22);
let json = JSON.stringify(umaPessoa);
console.log(json);
let jsonstring = '{"nome" : "John Doe", "idade":22}';
let obj = JSON.parse(jsonstring);
console.log(obj);