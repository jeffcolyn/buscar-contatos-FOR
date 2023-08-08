
let paragrafo = document.querySelector(".encontrado");
let inputBuscar = document.querySelector(".buscar");
let inputNovoNome = document.querySelector(".adcionar-novo");
let inputNovoNumero = document.querySelector(".adcionar-numero");
let botaoSalvar = document.querySelector(".salvar");

const contatos = [
    { name: 'Jeferson', number: '(74) 98128-0303'},
    { name: 'Maria', number: '(74) 98128-0404'},
    { name: 'João', number: '(74) 98128-0505'},
];

function search() {
    let contatoEncontrado = null;
    let nomeBuscado = inputBuscar.value.toLowerCase();

    for (let i = 0; i < contatos.length; i++) {
        if (nomeBuscado === contatos[i].name.toLowerCase()) {
            contatoEncontrado = contatos[i];
            break;
        }
    }

    if (contatoEncontrado) {
        paragrafo.innerHTML = "Contato Encontrado Nome: " + contatoEncontrado.name + " Tel: " + contatoEncontrado.number;
    } else {
        paragrafo.innerHTML = "Contato Não Encontrado, Tente Novamente";
    }
}

function adicionarContato() {
    let novoNome = inputNovoNome.value.trim();
    let novoNumero = inputNovoNumero.value.trim();

    if (novoNome === '' || novoNumero === '') {
        paragrafo.innerHTML = "Nome e número do contato são obrigatórios!";
        return;
    }

    contatos.push({ name: novoNome, number: novoNumero });
    inputNovoNome.value = '';
    inputNovoNumero.value = '';

    paragrafo.innerHTML = "Contato adicionado com sucesso!";
}

botaoSalvar.addEventListener("click", adicionarContato);
