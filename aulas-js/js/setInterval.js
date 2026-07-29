// setInterval é uma função que recebe dois parâmetros: uma função de callback e um tempo em milissegundos. Ela executa a função de callback repetidamente a cada intervalo de tempo especificado.

function exibirMensagem() {
    console.log("Olá, mundo!"); // exibindo a mensagem no console
}

setInterval(exibirMensagem, 2000); // chamando a função exibirMensagem a cada 2 segundos (2000 milissegundos)