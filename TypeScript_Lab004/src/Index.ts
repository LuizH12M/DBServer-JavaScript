import { Cofrinho, Moeda } from "./entidades";
import { lerCofrinho,salvarCofrinho } from './persistencia';


function main() {
    const cofre = new Cofrinho();
    cofre.adicionar(new Moeda(1, "1 centavo"));
    cofre.adicionar(new Moeda(50, "50 centavos"));
    cofre.adicionar(new Moeda(25, "25 centavos"));
    cofre.adicionar(new Moeda(5, "5 centavos"));
    try {
        // salvarCofrinho(cofre, 'meuCofrinho.json');
        lerCofrinho('meuCofrinho.json').then(cofre => console.log(cofre.calcularTotal()))
        .catch(erro => {
            console.log('Erro de leitura do arquivo');
            console.log(erro);
        });
    } catch (erro) {
        console.log('Erro no nome do arquivo');
        console.log(erro);
    }
   
}

main();