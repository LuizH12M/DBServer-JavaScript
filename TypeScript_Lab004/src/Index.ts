import { Cofrinho, Moeda } from "./Entidades";
import { salvarCofre, lerCofre } from './Persistencia';
import { callbackify } from "util";

function main() {

    // const cofre = new Cofrinho();
    // cofre.adicionar(new Moeda(1, "1 centavo"));
    // cofre.adicionar(new Moeda(50, "50 centavos"));
    // cofre.adicionar(new Moeda(25, "25 centavos"));
    // cofre.adicionar(new Moeda(5, "5 centavos"));
    // try {
    //     salvarCofre(cofre, 'meuCofrinho.json');
    // } catch (erro) {
    //     console.log('Erro no nome do arquivo');
    //     console.log(erro);
    // }
    lerCofre('meuCofrinho.json', (erro, cofre) => {
        if (erro) {
            console.log('Erro de leitura do arquivo: ');
            console.log(erro);
        } else {
            const obj = JSON.parse(dados);
            const cofre = new Cofrinho();
            for (let i = 0; i < cofre._moedas.length; i++) {
                cofre.adicionar(new Moeda (obj._moedas[i]._valor, obj._moedas[i]._nome));
            }
            //console.log(cofre!.calcularTotal()); // '!.' significa que eu sei que terá um resultado lá
        }

    })
}

main();