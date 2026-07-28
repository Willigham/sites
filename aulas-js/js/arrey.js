// criando uma lista
const lista = ["maçã", "banana", "laranja", "uva", "abacaxi"];

//outra forma de criar uma lista
const lista2 = new Array("maçã", "banana", "laranja", "uva", "abacaxi");

//outra forma de criar uma lista
const lista3 = [];
lista3[0] = "maçã";
lista3[1] = "banana";
lista3[2] = "laranja";
lista3[3] = "uva";
lista3[4] = "abacaxi";

//acessando elementos da lista
console.log(lista[0]);
console.log(lista2[1]);
console.log(lista3[2]);

//receber um valor especifico da lista
let fruta = lista[3]; // me daria a posição 3 da lista, que é "uva"
console.log(fruta);
