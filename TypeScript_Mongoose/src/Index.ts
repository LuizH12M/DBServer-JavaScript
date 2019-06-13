import {connect, Schema, model} from 'mongoose';

async function Main(){
    try {
        const url = 'mongodb://localhost:27017/testemongoose';
        const cliente = await connect(url,{useNewUrlParser:true});
        console.log('Conectado com sucesso');

        //Definir Schema e Model
        const pessoaEsquema = new Schema({
            nome: {type: String, required: true, minlength: 1, maxlength: 50},
            idade: {type: Number, required: true, min:0}
        });
        const pessoaModelo = model('Pessoa',pessoaEsquema,'pessoas');

        //Inserir documento
        /*
        const pessoaDocumento = new pessoaModelo({nome:'John Doe', idade:22});
        const documentoInserido = await pessoaDocumento.save();
        console.log(`Inserido:`);
        console.log(documentoInserido);
        */

        /*
        //Consultar documentos
        //const consulta = pessoaModelo.find();
        const consulta = pessoaModelo.where('idade').lt(30).sort('idade');
        const resultado = await consulta.exec();
        console.log(resultado);
        */

        /*
        //Alterar documento
        const documentoPessoa = await pessoaModelo.findById('5d028fc682c84a02d08d00db').exec();
        console.log(documentoPessoa);
        documentoPessoa!.set('idade',-1);
        console.log(documentoPessoa);
        await documentoPessoa!.save();
        */

        //Remover documento
        const documentoPessoa = await pessoaModelo.findById('5d028fc682c84a02d08d00db').exec();
        await documentoPessoa!.remove();

        if (cliente && cliente.connection) {
            cliente.connection.close();
        }
    } catch (error) {
        console.log('Erro:');
        console.log(error);
    }
}

Main();