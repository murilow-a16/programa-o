
/* ex1*/
let precoPao = 15;
let dinheiroDispo = +prompt("quanto de dinheiro voce tem?");

if(dinheiroDispo >= precoPao){
    console.log("pode comprar");
}
else{
    console.log("nao pode comprar");
}

/*ex2*/
let temperatura = +prompt("qual a temperatura");

if(temperatura < 20){
    console.log("ta frio");
}
else if(temperatura >= 20 && temperatura <= 28){
    console.log("ta normal")
}
else{
    console.log("ta quenteeee");
}

/*ex3*/
let horario = +prompt("que horas são?");

if(horario >=6 && horario <=11){
    console.log("bom dia");
}
else if (horario >=12 && horario <=17){
    console.log("boa tarde");
}
else if(horario >= 18 && horario <= 23){
    console.log("boa noite")
}
else{
    console.log("madrugando??")
}

/*ex4*/
let idade = 40;
let condicionamento = true;
let permicao = true;

if(idade >=18 && idade <=35){
    console.log("quase la");
    if(condicionamento == true || permicao == true){
        console.log("agora pode passar")
    }
}
else{
    console.log("não pode passar")
}
    
