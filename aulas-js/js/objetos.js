// criando um objeto
const carro = {
    marca: "ford",
    modelo: "ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function() {
        alert("Biiiiiiiiii")},
    completo: function() {
        return "A marca é " + this.marca + ", o modelo é " + this.modelo}
};

console.log(carro.completo());