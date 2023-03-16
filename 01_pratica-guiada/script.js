//
let saldo = 0
//Adicione 22.40 ao seu saldo
saldo = saldo + 22.40

console.log("Saldo depois de adicionar", saldo)

//Gaste 12.34 do seu saldo

saldo = saldo - 12.34

console.log("Saldo depois de gastar:", saldo.toFixed(2))

//Divida seu dinheiro com seu irmão

saldo = saldo/2

console.log("A divisão por 2 deu:", saldo.toFixed(2))

//Aplicar o saldo num investimento que render 3.40 mais

saldo = saldo * 3.40

console.log("Seu novo saldo é:", saldo.toFixed(2))

//Dividir o dinheiro em 3 partes iguais e pegar o resto pra gastar

saldo = saldo%3

console.log(`Sobrou: ${saldo.toFixed(2)}`)

//ordem de precedencia
valor = 2

valor = valor *(2 + 2)

console.log(valor)

//Testes de igual
console.log(5===5)
console.log(5!==5)
console.log(5!=="5")
console.log(typeof 5 === typeof 20)
console.log(typeof "5"=== typeof "cinco")

//Testes de menor e maior

let x = 10
let y = 22

//primeiro igual ao segundo
console.log(`x é igual a y? ${x===y}`)
//primeiro menor ou igual ao segundo
console.log(x<=y)
//primeiro maior que o segundo
console.log(x>y)
//primeiro menor que o segundo
console.log(x<y)

