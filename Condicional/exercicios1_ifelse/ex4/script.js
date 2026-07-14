let idade = +prompt('Qual sua idade');
let cnh = prompt('possui CNH');

if(idade >= 18 && cnh == "não"){
    console.log('voce é irresponsável');
}
if(idade >= 18 && cnh == "sim"){
    console.log('voce nao tem idade para dirigir');
}
if(idade < 18 && cnh == "não"){
    console.log('nnigga');
}