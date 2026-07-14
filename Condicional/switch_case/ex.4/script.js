let pedido = ~~prompt("qual o pedido: (1, 2 ou 3) ")

switch (pedido) {
    case 1:
        alert("Agua");
        break
    case 2:
        alert("Refrigerante");
        break;
    case 3:
        alert("Suco");
        break;
    default:
        alert("Dados invalidos");
}
