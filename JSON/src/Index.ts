class Pessoa {
    nome : string;
    idade : number;
    
    constructor(n : string, i : number) {
        this.nome = n;
        this.idade = i;
    }
}

let umaPessoa = new Pessoa ('John Doe', 22);
let json = JSON.stringify(umaPessoa); // JSON é o formato de um objeto
// STRINGFY faz um objeto virar string
console.log(json);
let jsonstring = '{"nome" : "John Doe", "idade":22}';
let obj = JSON.parse(jsonstring); // PARSE faz virar um objeto de novo
console.log(obj);