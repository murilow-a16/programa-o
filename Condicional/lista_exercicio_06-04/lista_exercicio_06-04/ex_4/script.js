let valorQuilo = parseFloat(prompt("Qual o valor do quilo do produto"));
let valorConsumido = parseFloat(prompt("Qual o valor consumido em quilo"));
let valorFinal = valorConsumido*valorQuilo;
alert(`O valor a ser pago será ${valorFinal} reais`);
console.log(`O valor a ser pago será ${valorFinal}`);