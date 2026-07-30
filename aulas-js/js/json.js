// JSON.parse() -> converte texto no padrão JSON em objetos

const carro = {
    marca : "Fiat",
    modelo: "Uno",
    motor : ["1.6", "1.4", "1.0"]
}

// converteu para texto JSON
let texto = JSON.stringify(carro);

// colocou o texto no nosso HTML
document.getElementById('area').innerHTML = texto;

// convertemos texto em objeto
let obj = JSON.parse(texto);

//pegamos um valor deste obejto
console.log(obj.motor[2]);



// JSON.stringfy() -> converte objetos em texto padrão JSON

function buscarCEP(){
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET','https://viacep.com.br/ws/' + input + '/json/' );
    ajax.send();

    ajax.onload = function(){
    document.getElementById('texto').innerHTML = this.responseText;

    //trafomou o texto em objeto
    let obj = JSON.parse(this.responseText);

    //Aquie peguei os valores que eu queria
    let logradouro = obj.logradouro;
    let cidade = obj.localidade;
    let estado = obj.uf;

    document.getElementById('texto').innerHTML = "logradouro: " + logradouro + "<br> Cidade: " + cidade + "<br> Estado: " + estado;
}
}


