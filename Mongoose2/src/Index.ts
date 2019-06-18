import {Document, Schema, model, Model, connect} from 'Mongoose';

interface Pessoa {
    nome: string,
    idade: number
}

interface PessoaDocument extends Pessoa, Document{}

const PessoaSchema = new Schema({
    nome: {type: String, required: true, minlength: 1, maxlength: 50},
    idade: {type: Number, required: true, min:0}
});

const PessoaModel: Model<PessoaDocument>
= model('Pessoa', PessoaSchema, 'pessoas');

async function Main() {
    try {
        const url = 'mongodb://localhost:27017/testemongoose';
        const cliente = await connect(url,{useNewUrlParser:true});
        console.log('Conectado com sucesso');
        /*
        const documento = await PessoaModel.create({nome:'Novo', idade:10});
        console.log(documento);
        documento.idade = 45;
        let res = await documento.save();
        console.log(res);
        */
       const consulta = PessoaModel.find();
       const resultado = await consulta.exec();
       //const resultado = await consulta.lean().exec();
       resultado.forEach(p => console.log(p.nome));
    } catch (error) {
        console.log('Erro:');
        console.log(error);
    }
}

Main();