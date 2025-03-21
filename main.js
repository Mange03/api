// var lista = ["Afonso", "Henriques", "Aline", "Alacoque"];
//     console.log (lista);//imprime o array inteiro

// lista.push("Felipe"); //adiciona elementos na lista
// console.log(lista)

// console.log(lista[4]);//imprime o array selecionado "[4]"

// lista.pop(); //exclui último elemento
// console.log(lista);

// console.log(lista.length); //exibe a quantidade de elementos da array

// teste = [
//     {nome:"Afonso", idade:31},
//     {nome:"Afonso", idade:31},
// ]
// console.log(teste)

function Aluno (a,b){
    this.nome = a;
    this.nota = b;
}

var aluno = new Aluno ('Leandro', 7);
var aluno2 = new Aluno ('Winchester', 3);

var lista = []
lista.push(aluno);
lista.push(aluno2);

console.log(lista);