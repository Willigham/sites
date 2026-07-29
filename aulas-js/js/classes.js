// criando uma classe

class carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
}

// criando um objeto da classe carro
 const uno = new carro("Fiat", "Uno", 2001);
 console.log(uno); // exibindo o objeto no console

 const savero = new carro("Chevrolet", "S10", 2015);
 console.log(savero); // exibindo o objeto no console

 