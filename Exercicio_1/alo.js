var umaPessoa;
umaPessoa = 'John Doe';
var outraPessoa = 'Mary'; // Inferencia de tipo String
var hoje = new Date();
// document.body.innerHTML = `Alô, ${umaPessoa} ! Hoje é ${hoje.toDateString()}`;
document.body.innerHTML = alo(outraPessoa);
function alo(nome) {
    return 'Alô, ' + nome;
}
