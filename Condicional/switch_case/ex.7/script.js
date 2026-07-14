let fig = prompt("qual a figura desejada desejada: \n 1 = quadrado; \n 2 = retangulo;\n 3 = ciruclo");
let n1;
let n2;

let area;

switch (fig) {
    case "1":
        n1 = +prompt("Quanto mede o lado 1");
        n2 = +prompt("Quanto mede o lado 2");
        area = n1 * n2;
        alert(`a area do retangulo é ${area}`);
        break
    case "2":
        n1 = +prompt("Quanto mede a base");
        n2 = +prompt("quanto mede a altura");
        area = n1 * n2;
        alert(`a area do retangulo é ${area}`);
        break
    case "3":
        n1 = +prompt("quanto mede o raio");
        n2 = Math.PI;
        area = n2 * (n1**2);
        alert(`a area do circulo é ${area}`);
        break
    default:
        alert("Dados invalidos");
}