let nota1 = +prompt("qual a nota do aluno");
let nota2 = +prompt("qual a nota do aluno");
let media = (nota1 + nota2)/2;

if( media >= 7){
    alert(`media final ${media}, aprovado`);
}
else if (media >= 5 && media <=6.9){
    alert(`media final ${media}, recuperação`);
}
else{
    alert(`media final ${media}, rerpovado`);
}