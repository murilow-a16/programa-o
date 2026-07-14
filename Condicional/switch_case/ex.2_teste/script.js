let n1 = +prompt("Qual o primeiro numero");
let n2 = +prompt("qual o segundo numero");
let op = prompt("qual a operação desejada");
let resultado;

switch (op){
    case "multiplicação":
        resultado = n1*n2;
        alert(`o resultado da operação foi ${resultado}`);
        break
    case "divisão":
        resultado = n1/n2;
        alert(`o resultado da operação foi ${resultado}`);
        break
    case "adição":
        resultado = n1+n2;
        alert(`o resultado da operação foi ${resultado}`);
        break
    case "subtração":
        resultado = n1-n2;
        alert(`o resultado da operação foi ${resultado}`);
        break
        default:
            alert("Dados invalidos");
}