function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar;
}


function somar(real, cotacaoDolar) {
    return real + cotacaoDolar;
}

var valorReal = 7.89;
var cotacaoDolar = 5.08;
var total = realParaDolar(valorReal, cotacaoDolar);
alert("O valor em real é R$ " + valorReal + " e o valor em dólar é US$ " + total);

function alertaHello() {
    alert("Olá Pessoal");
}
