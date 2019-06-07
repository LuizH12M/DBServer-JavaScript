class ValidationError extends Error {
    constructor (mensagem : string) {
        super(mensagem);
        this.name = 'ValidationError';
    }
}

function vaiDarErro() {
    throw new ValidationError('Dados inválidos! ');
    return 'teste';
}

try {
    vaiDarErro();
} catch (erro) {
    console.log(erro.name);
    console.log(erro.mensage);
}