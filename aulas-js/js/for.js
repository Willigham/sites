// laço de repetição for
for (let i = 0; i < 10; i++) { // a variável i é inicializada com 0, e enquanto i for menor que 10, o laço será executado, e a cada iteração, i será incrementado em 1
    console.log(i); // exibindo o valor de i no console
}


var ano = new Date().getFullYear(); // obtendo o ano atual

for (let i = ano; i >= 1900; i--) { 
    document.getElementById("ano").innerHTML += "<option value='" + i + "'>" + i + "</option>";
}

const carros = ["Gol", "Palio", "Civic", "Corolla", "Fusca"];
var tamanho = carros.length; // obtendo o tamanho do array carros
for (let i = 0; i < tamanho; i++) {
    document.getElementById("teste").innerHTML += carros[i] + " - ";
}