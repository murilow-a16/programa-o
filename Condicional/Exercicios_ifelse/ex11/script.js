let idade = +prompt("qual a idade do participante");

if (idade <= 12){
    alert(`a catgoria é infantil`);
}
    
else if(idade >= 13 && idade <= 17){
    alert(`a categoria sera juvenil`);
}
else{
    alert(`a categoria sera adulto`);
}
    
