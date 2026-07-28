// criando uma função switch

function verificaCor() {
    let cor = document.getElementById("cor").value; // obtendo o valor do input com id "cor"
    cor = cor.toLowerCase(); // convertendo o valor para minúsculo para evitar problemas com maiúsculas e minúsculas

    switch (cor) {
        case "vermelho":
            document.body.style.backgroundColor = "red"; // alterando a cor de fundo para vermelho
            break;
        case "azul":
            document.body.style.backgroundColor = "blue"; // alterando a cor de fundo para azul
            break;
        case "verde":
            document.body.style.backgroundColor = "green"; // alterando a cor de fundo para verde
            break;
        case "amarelo":
            document.body.style.backgroundColor = "yellow"; // alterando a cor de fundo para amarelo
            break;
        default:
            document.getElementById("teste").innerHTML = "Nenhuma cor disponivel" // alterando o texto do elemento com id "teste"
    }
}
