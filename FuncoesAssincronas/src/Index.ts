import * as fs from 'fs';

// try {
//     fs.writeFileSync('dados.txt', 'teste'); 
//     // nome do arquivo, o que será escrito no arquivo
// } catch (error) {
//     console.log(`Erro: ${error.name} - ${error.message}`);
// }


try {
    // nome do arquivo, o que será escrito no arquivo, código que será executado
    fs.writeFile('dados2.txt', 'mais um', (err) => {
        if (err != null) {
            throw err;
        }
        console.log('arquivo escrito com sucesso! ');
    }); 
    console.log('Continuei executando... ');
} catch (error) {
    console.log(`Erro: ${error.name} - ${error.message}`);
}


fs.readFile('pessoa.json', 'utf-8', (erro, dados) => {
    if (erro != null) {
        console.log('Erro de leitura de arquivo');
    } else {
        //console.log(dados);
        try {
            const obj = JSON.parse(dados);
            console.log(obj);
        } catch {
            console.log('Arquivo JSON inválido!');
        }
    }
});

function lerArquivoAssync (nomeArquivo : string) : Promise <string> {
    return new Promise((resolve, reject) => {
        try {
            let dados = fs.readFileSync(nomeArquivo, 'utf-8');
            resolve(dados);
        } catch (erro) {
            reject (erro);
        }
    })
}

// leia o arquivo e entao faça algo com ele ____.then(____)
// lerArquivoAssync('dados.txt').then(
//     dados => console.log(dados),
//     erro => console.log(erro)
// );

// lerArquivoAssync('dados.txt')
// .then(dados => console.log(dados))
// .catch(erro => console.log(erro.message));

(async () => {
    try {
        let dados = await lerArquivoAssync('dados.txt');
        console.log(dados);
    } catch (erro) {
        console.log(erro.message);
    }
})();
