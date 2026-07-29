// setTimeout é uma função que recebe dois parâmetros: uma função de callback e um tempo em milissegundos. Ela executa a função de callback após o tempo especificado.

function exibirMensagem() {
    console.log("Olá, mundo!"); // exibindo a mensagem no console
}

setTimeout(exibirMensagem, 2000); // chamando a função exibirMensagem após 2 segundos (2000 milissegundos)