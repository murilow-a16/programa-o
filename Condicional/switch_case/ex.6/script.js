let codigo = ~~prompt("qual o codigo: (100, 200 ou 300) ")

switch (codigo) {
    case 100:
        alert("Mouse R$50,00");
        break
    case 200:
        alert("teclado R$80,00");
        break
    case 300:
        alert("Monitor R$900,00");
        break
    default:
        alert("dados invalidos");

}
