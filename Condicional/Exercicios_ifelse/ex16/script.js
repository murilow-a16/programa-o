let media = +prompt("media final do aluno");
let renda = +prompt("renda");

if(media >= 9 && renda < 2000){
    bolsa = 100;
}
else if (media >= 8 && renda <= 3500){
    bolsa = 50;
}
else if ( media >= 7 && renda <= 5000){
    bolsa = 25;
}
else{
    alert(`sem bolsa`)
}
alert(`a bolsa que o candidato ganhara sera ${bolsa}%`);