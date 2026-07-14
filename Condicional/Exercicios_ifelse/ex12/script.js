let A = +prompt("medida do lado");
let B = +prompt("medida do lado");
let C = +prompt("medida do lado");

if((A+B) > C && (A + C) > B && (B + C) > A){
    alert(`forma um triangulo`);
}
else{
    (`não forma um triangulo`);
}