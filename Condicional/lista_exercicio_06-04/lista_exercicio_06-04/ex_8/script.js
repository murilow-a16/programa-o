let precoOriginal = parseFloat(prompt("Qual o preco original de produto"));
let precoFinal = parseFloat(prompt("Qual o preco cobrado?"));
let desconto= precoOriginal - precoFinal;
let porcentagem = (desconto / precoOriginal)*100;
alert(`o valor de desconto foi ${porcentagem .toFixed(2)}%`);
