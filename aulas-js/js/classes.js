// criando uma classe

class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }

    buzinar() {
        return this.modelo + " buzinou: Biiii!";
    }

    ligouAlerta() {
        return this.modelo + " ligou o alerta!";
    }

    deuPartida() {
        return this.modelo + " deu partida!";
    }
}

// criando um objeto da classe carro
 const uno = new Carro("Fiat", "Uno", 2001);
 console.log(uno.buzinar());

 const savero = new Carro("Chevrolet", "Saveiro", 2015);
 console.log(savero.ligouAlerta());

const gol = new Carro("Volkswagen", "Gol", 2013);
console.log(gol.deuPartida());




class Animal {
    constructor(especie, nome, idade){
        this.especie = especie;
        this.nome = nome;
        this.idade = idade;
        this.acordado = true;
    }

    comer(alimento){
        if(this.acordado == true){
            if ( this.especie == "cachorro" && alimento == "racao"){
                return this.nome + " está comendo ração!";
            } else if ( this.especie == "gato" && alimento == "peixe"){
                return this.nome + " está comendo peixe!";
            } else if ( this.especie == "passaro" && alimento == "sementes"){
                return this.nome + " está comendo sementes!";
            } else{
                return this.nome + " não pode comer esse alimento!";
            }
        } else {
            return this.nome + " está dormindo e não pode comer!";       
        }
    }

    envelhecer(){
        this.idade++;
        return this.nome + " envelheceu! Agora tem " + this.idade + " anos.";
    }

    dormir(){
        this.acordado = false;
        return this.nome + " está dormindo!";
    }

    acordar(){
        this.acordado = true;
        return this.nome + " acordou!";
    }
}

// criando um objeto da classe Animal
const cachorro = new Animal("cachorro", "Rex", 3);
console.log(cachorro.dormir());
console.log(cachorro.comer("racao"));
console.log(cachorro.acordar());
console.log(cachorro.comer("fruta"));
console.log(cachorro.comer("racao"));
console.log(cachorro.envelhecer());
console.log(cachorro.envelhecer());
console.log(cachorro);
