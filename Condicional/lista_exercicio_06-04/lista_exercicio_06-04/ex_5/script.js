const pedreiro = 20.00;
const pintor = 16.00;
let horaPedreiro = prompt("Qual a hora do pedreiro?");
let horaPintor = prompt("Quantas horas o pintor trabalha");
let totalPedreiro = pedreiro*horaPedreiro;
let totalPintor = pintor*horaPintor;
let total = totalPedreiro+totalPintor;
alert(`O valor do pedreiro sera ${totalPedreiro} \no valor do pintor sera ${totalPintor} \no valor da obra sera ${total}`);
console.log(`O valor do pedreiro sera  R$${totalPedreiro} \no valor do pintor sera R$${totalPintor} \no valor da obra sera R$${total}`);