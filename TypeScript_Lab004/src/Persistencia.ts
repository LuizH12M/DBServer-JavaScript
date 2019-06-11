import * as fs from 'fs';
import { Cofrinho } from './Entidades';

export function salvarCofre (cofre : Cofrinho, nomeArq : string) : void {
    const json = JSON.stringify(cofre);
    fs.writeFile(nomeArq, json, erro => {
        if (erro) // if (erro !== null) 
            throw erro;
    });
}

export function lerCofreAssync (nomeArq : string) : void {
    fs.readFile(nomeArq, 'utf-8', (erro, dados) => {
        if (erro !== null) 
            throw erro;
        const obj = JSON.parse(dados);
    })
}
