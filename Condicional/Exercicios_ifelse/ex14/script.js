let agua = +prompt("consumo  de agua");
let valor;

if (agua <= 10){
    valor = 30;
}
else if( agua > 10 && agua <= 25){
    valor = 50 ;
}
else{
    valor = 80;
}
alert(`o valor a pagar deve ser ${valor}`);