// manipulação de datas

let data = new Date();
// console.log(data);


// pegar o ano atual com 4 dígitos
let ano = data.getFullYear();
// console.log(ano);

// pegar mês atual (0 a 11) sendo 0 = janeiro e 11 = dezembro
let mes = data.getMonth();
// console.log(mes);    

const mesesEscrito = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let mesEscrito = mesesEscrito[data.getMonth()];
console.log(mesEscrito);

// pegar dia do mês (1 a 31)
let diaMes = data.getDate();
// console.log(diaMes);

const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
let diaSemana = diasDaSemana[data.getDay()];
console.log(diaSemana);

//pegar hora atual (0 a 23)
let hora = data.getHours();
// console.log(hora);

// pegar a data no formato brasileiro
let dataBR = data.toLocaleString('pt-BR', {dateStyle: 'short'});
console.log(dataBR);

// pegar os valores separados da data
d = new Date();
let dia = d.getDate();
let mes2 = d.getMonth() + 1;
let ano2 = d.getFullYear();

function addZero(x) { return x < 10 ? '0' + x : '' + x;};

let dataPadraoBR = dia + "/" + mes2 + "/" + ano;
console.log(dataPadraoBR);


// comparar datas - maior ou menor. ex vencimentos
var hoje = new Date();
var vencimento = new Date(2022, 0, 15);

if(hoje > vencimento){
    console.log("Sua conta esta vencida!")
} else {
    console.log("Ainda não venceu, tudo certo !")
}