let hora = prompt("qual o periodo: (M, V ou N) ");

switch (hora.toUpperCase) {
    case M:
        alert("Bom dia");
        break
    case V:
        alert("Boa tarde");
        break;
    case N:
        alert("Boa noite");
        break;
    default:
        alert("Dados invalidos");
}
